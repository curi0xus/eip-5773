# EPI-5773 Review By whyS0curious

The approach for this review is to find the differences between a standard ERC-721 contract. Read each of those variables and functions that differs from the standard contract and document down what they are for and how it functions within the grand scheme of things. We will also conduct a Fuzz Test and Gas Optimization Test on it. Categorise issues that we find according to severity and hand off the report to the RMKR team.

## Variables

1. \_tokenApprovals
   `_tokenApprovals` is a map of `tokenId`s stored against non-owner `address`es. This gives access control to approved operators to transfer the NFT on behalf of the user. This might cause security problems.
2. \_tokenApprovalsForAssets
   `_tokenApprovalsForAssets` is also a map of `tokenId` stored against non-owner `address`es. It is used to give access control to approved operators that are not owners for the acceptance or rejection of assets. This might cause security problems.
3. \_operatorApprovals
   `_operatorApprovals` stores the relationship of the `owner` address to the approved `operator` address. It gives non-owner addresses(operators) access control to transfer tokens on behalf of the owner. This might cause security problems.
4. \_operatorApprovalForAssets
   `_operatorApprovalsForAssets` for assets is an internal map used by the `isApprovedForAllForAssets` method. It is used to check that whether the caller of the method is the owner or approved for the asset when the `acceptAsset` method is called.
5. \_assets
   `_assets` is a map of `assetId`s to the pointer that it represents. This pointer points to an external metadata json file that contains more information about the asset. The pointer can be accessed internally or external via the `getAssetMetadata` method which takes in a `tokenId` and an `assetId` and returns a `string`. A method can be exposed externally via the `_addAssetEntry` method. How is this different from `tokenAssets`?
6. \_assetReplacements
   `_assetReplacements` is a map of the `tokenId`:`newAssetId`:`oldAssetId`. It serves as a temporary registry of the 'to be replaced' assets that are registered to particular tokens. Owners or approved operators can choose to accept or reject assets that are in this map which will remove the entry from the map. How is this different from `pendingAssets`?
7. \_activeAssets
   `_activeAssets` stores the relationship of `tokenId`s and a list of all `assetIds` that belongs to a particular `tokenId`. All assets that have been accepted by an owner or an approved operator will find its way in this map. The list can be retrieved internally or externally via `getActiveAssets` method. The order of priority of these assets are stored under `_activeAssetPriorities` which you can read below. When the owner or approved operator replaces the old asset id in the list with the new asset id. This ensure that the list is always kept current. The order in the list that it takes is dependent on the `_pendingAssets` map?
8. \_activeAssetPriorities
   `_activeAssetPriorities` is a map of `tokenId`s to a list of asset priorities of the `activeAsset`s registered under that particular id. When a new asset is accepted, its priority queues after those that came before it until an owner or an approved operator manipulates it via the `setPriority` method. The list is `uint16` it stores the length of the `_activeAssets` array that belongs to one of the `tokenId`s at any one point of time. It is improbable that the space will be used up since accepted assets will likely be swapped out at some point of time and this record is then updated accordingly.
9. \_tokenAssets
   The `_tokenAssets` map is a registry used to store the current active asset that is used by a particular token id. It is first set to `tokenId`:`assetId`:`boolean` when an operator or owner adds a new asset to token via the `_addAssetToToken` method. When the owner or operator accepts a new asset via the `acceptAsset` method, the old asset id is removed from the registry. It exists alongside `_activeAssets` in order to achieve reads of O(1) instead of having to traverse the entire list of of active assets, using storage space as a tradeoff to compute time.
10. \_pendingAssets
    `_pendingAssets` stores the relationship between `tokenId` and a list of `assetId`s ordered by their priorities. It is holding place before assets are accepted or rejected. Whenever a new asset is added to a token, a new entry will be created in the list. By default, this list prioritizes assets in a FCFS manner. i.e. the older assets will have priority by default. When the owner or approved operator accepts/rejects an asset, it will be deleted from this list.

## Methods

1. approve
   The `approve` function is a `public` and `virtual` which allows it to be inherited in other parts of the smart contract and externally by a client. It also allows an inheriting contract to override its behavior. The purpose of this method is so that the record of each `tokenId` and their administrators, identified by their addresses is kept under the `_tokenApproval` map. This allows non-owner addresses to take actions on behalf of token owners.

2. approveForAssets
   The `approveForAssets` function has the exact same implementation as the `approve` method. However, the `tokenId`:`address` relationship is stored in another map called `_tokenApprovalsForAssets`.

3. getApproved
   The `getApproved` method is used to retrieve the non-owner `address` that is approved to act on behalf on a particular `tokenId` If the `tokenId` in question does not exist, the method reverts.

4. setApprovalForAll
   The `setApprovalForAll` method is used to map an `operator` address to an `owner` address. The `operator` address will gain control over all the `tokenId`s that the `owner` address owns once it is set to true.

5. isApprovedForAll
   The `isApprovedAll` method is used to check if an `operator` address is approved for all the tokens that an `owner` owns.

6. setApprovalForAllForAssets
   The `setApprovalForAllForAssets` method is implemented the exact same way that the `setApprovalForAll` method is implemented which confuses me about what the use for it is.

7. isApprovedForAllForAssets
   The `isApprovedForAllForAssets` method is implemented the exact same way that the `isApprovedForAll` method is implementede. This confuses me as to the use for it.

8. transferFrom
   The `transferFrom` method overrides the original ERC-721 implementation. The only difference here is that it checks whether the caller of the method and the tokenId that is transferred is given the veto power by the owner. Checks `isApprovedForAll` and `getApproved`

9. safeTransferFrom
   The `safeTransferFrom` method overrides the original ERC-721 implementation. The difference is that it checks whether the caller of the method and the tokenId to transfer is given veto power by the owner.Checks `isApprovedForAll` and `getApproved`

10. acceptAsset
    The `acceptAsset` method allows the token owner to accept an asset that is offered to the owner by an approved operator. Depending on the high level implementation, an approved operator first has to register the asset for use under the `_addAssetEntry` method and then register the asset under a particular token via `_addAssetToken`.

11. rejectAsset
    The `rejectAsset` method looks into the `_pendingAssets` map to find the

### Diff Variables

- [x] \_tokenApprovals
- [x] \_tokenApprovalsForAssets
- [ ] \_operatorApprovals
- [ ] \_operatorApprovalsForAssets
- [ ] \_assets
- [ ] \_assetReplacements
- [ ] \_activeAssets
- [ ] \_activeAssetPriorities
- [ ] \_tokenAssets
- [ ] \_pendingAssets

### Diff Functions

- [x] approve
- [x] approveForAssets
- [x] getApproved
- [x] getApprovedForAssets
- [x] setApprovalForAll
- [x] setApprovalForAll
- [x] setApprovalForAllForAssets
- [x] isApprovedForAllForAssets
- [x] transferFrom
- [x] safeTransferFrom
- [] \_safeTransfer
- [] \_exists
- [] \_isApprovedOrOwner
- [] \_isApprovedForAssetsOrOwner
- [] \_safeMint
- [] \_mint
- [] \_burn
- [] \_transfer
- [] \_approve
- [] \_approveForAssets
- [] \_setApprovalForAll
- [] \_setApprovalForAllForAssets
- [] \_checkOnERC721Received
- [] \_beforeTokenTransfer
- [] \_afterTokenTransfer
- [x] acceptAsset
- [] rejectAsset
- [] rejectAllAssets
- [] setPriority
- [] getActiveAssets
- [] getPendingAssets
- [] getActiveAssetPriorities
- [] getAssetReplacements
- [] getAssetMetadata
- [x] \_addAssetEntry
- [x] \_addAssetToToken
- [] \_beforeAddAsset
- [] \_afterAddAsset
- [] \_beforeAddAssetToToken
- [] \_afterAddAssetToToken
- [] \_beforeAcceptAsset
- [] \_afterAcceptAsset
- [] \_beforeRejectAsset
- [] \_afterRejectAsset
- [] \_beforeRejectAllAssets
- [] \_afterRejectAllAssets
- [] \_beforeSetPriority
- [] \_afterSetPriority
