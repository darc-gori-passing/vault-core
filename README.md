# vault-core

Core contracts and operational tooling for the Vault protocol.

## Layout

- `deployments/addresses.json`: the canonical registry of deployed contract addresses per chain.
- `scripts/verify-addresses.mjs`: CI check that every registry entry is a well-formed EVM address.

## Contributing

All changes land through pull requests with at least one review. Commits must be signed. Secret scanning and pre-commit hooks (`gitleaks`) run on every change.

## Security

See our security policy and audit reports on the protocol website. To report a vulnerability, contact the security team; do not open a public issue.
