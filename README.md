---
description: An overview to Dataswap
---

# Intrduction

Dataswap is a blockchain-based Layer 2 project built on [IPFS](https://ipfs.tech/) and [Filecoin](https://filecoin.io/), functioning as a decentralized open data exchange platform. Its goal is to aggregate open datasets from various regions and industries globally, enabling the permanent storage of valuable human data. Additionally, Dataswap offers comprehensive and reliable services for data retrieval, downloading, and analysis. Through these efforts, it aims to facilitate data sharing and collaborative progress for humanity.

### Features

Aggregating open big data from various global regions and industries, encompassing economic, financial, medical, and health data types. This creates efficient and valuable gateways to datasets.

Implement a decentralized matching mechanism to attract more open dataset suppliers, storage providers, retrieval providers, compute providers, and users, fostering global data sharing and innovation.

* `Dataswap storage`
  * about [Discussion on Trustless Notary](https://docs.google.com/document/d/1KLR6nZ8ic4ARj3J46XsxSE\_b1RpDP\_z3JBKL4alHGGw/edit?pli=1) and [Trustless Notary Design Space + Guidelines](https://medium.com/filecoin-plus/ideation-trustless-notary-design-space-guidelines-bc21f6d9d5f2), [Dataswap storage](https://github.com/dataswap/specs/tree/main/systems#22-trustless-notary) has undertaken a more in-depth implementation in this regard.
    * Enabling proof and verification of stored [Valid Data Consistency](https://github.com/dataswap/specs/blob/main/algorithms/README.md#2-dataset-consistency-algorithm).
    * Monitoring client's valid data storage and verification with finer granularity.
    * Simplifying notary work through code.
    * Decoupling data cap and notary signatures to prevent malicious behavior.
  * Utilizing a data authentication mechanism (including data submit, verification, and auditing) to ensure the genuine value of platform data.
  * Utilizing the decentralized automated matching mechanism of DataSwap storage for the permanent storage ([using Filecoin](https://filecoin.io/)) and distribution of datasets, establishing a transparent and publicly accessible distributed data index.
* `Dataswap retrieve`
  * Provide open retrieval and download services. This includes various access methods such as web interfaces, API integration, and file downloads.
    * Customers pay funds into smart contracts to easily search for and access the required datasets.
    * Retrieval service providers receive incentives by offering retrieval services.
* `Dataswap compute`
  * Providing decentralized data analysis and matching services, empowering data-driven decision-making and intelligent solutions.
