---
description: >-
  Based on the dataset consistency algorithm, it is possible to prove the
  consistency between the original dataset and the dataset stored on Filecoin.
  It is known that the storage data of Filecoin trans
---

# Dataset Consistency Algorithm

### Objectives

The objective is to propose a dataset consistency verification algorithm that empowers efficient data storage, supporting trustless notary by:

* Enabling proof and verification of valid data storage.
* Monitoring customer's valid data storage and verification at a finer granularity.
* Reducing the complexity of notory work through code.
* Decoupling datacap and notary signatures to prevent malicious behavior.

### Principles

* The DP needs to submit the DatasetProof to the dataset contract, where the DatasetMerkleTree is stored on-chain, and the CarProofs are stored on the Filecoin network (to save on-chain resources).
* The DA challenges specific DatasetLeafHashes (CarRootHashes) and CarLeafHashes through random challenges.
* The DA downloads partial file data of the CarProofs corresponding to the challenged CarRootHashes and CarLeafHashes from the Filecoin network (meeting the proof requirements, typically in the MB-level).
* The DA submits the challenged DatasetHash Merkle Proof and CarRootHash Merkle Proof to the blockchain as challenge proof information for verification.
* Through multi-point challenges and multiple participants' challenges, random challenges are performed on multiple Car files to ensure the correctness of the entire dataset.
* Due to this algorithm, the system can allocate DataCap at the granularity of individual car files for automatic distribution and management.

\
