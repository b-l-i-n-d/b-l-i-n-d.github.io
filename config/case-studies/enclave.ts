import type { ProjectShowcase } from "@/types/portfolio";

const enclaveShowcase: ProjectShowcase = {
  graph: {
    navTitle: "Interactive Architecture Map",
    navSubtitle:
      "Inspect the offline-first crypto vault: native crypto core, device-backed key storage, and drive sync",
    title: "Enclave Vault Architecture Graph",
    countLabel: "9 Core Systems",
    verifyLabel: "Proprietary Architecture · Private Source",
    inspectLabel: "Inspect Source",
    commitsHeading: "Key Architecture Modules:",
    commitPrefix: "src:",
    columns: [
      {
        title: "Crypto Core",
        nodeIds: ["aes-gcm", "argon2id", "totp"],
        accent: "rose",
      },
      {
        title: "Vault & Access",
        nodeIds: ["key-store", "biometric", "sqlite"],
        accent: "emerald",
      },
      {
        title: "Sync & Watchtower",
        nodeIds: ["drive-sync", "hibp", "recovery-phrase"],
        accent: "sky",
      },
    ],
    nodes: [
      {
        id: "aes-gcm",
        label: "AES-256-GCM Authenticated Cipher",
        version: "Core",
        badge: "Crypto · encryption.ts",
        commits: [
          "encryptJson — appends auth tag to base64 ciphertext blob",
          "decryptJson — asserts auth tag before JSON decode",
          "decryptBytes — raw byte path for the Drive vault blob",
        ],
        description:
          "Authenticated symmetric encryption over the vault store. Every record is encrypted with a random 96-bit IV; a 128-bit GCM auth tag is appended to the ciphertext so tampered data fails decryption.",
        prHighlight: "lib/crypto/encryption.ts",
        metrics: "96-bit IV · 128-bit tag",
      },
      {
        id: "argon2id",
        label: "Argon2id Key Derivation",
        version: "KDF",
        badge: "Key · key-derivation.ts",
        commits: [
          "deriveVaultKey — 65536 KiB memory, 3 passes, parallelism 1",
          "deriveRecoveryKey — BIP39 mnemonic to recovery key",
          "generateSalt — 32-byte cryptographically random salt",
        ],
        description:
          "Native Argon2id via react-native-quick-crypto derives a 256-bit vault key from the master password plus a random 32-byte salt (64MB memory, 3 passes, single lane).",
        prHighlight: "lib/crypto/key-derivation.ts",
        metrics: "64MB · 3 passes · 1 lane",
      },
      {
        id: "totp",
        label: "RFC 6238 TOTP Engine",
        version: "Auth",
        badge: "2FA · totp.ts",
        commits: [
          "base32Decode — RFC 4648 alphabet with padding strip",
          "generateTotp — code + remainingSeconds live window",
          "parseOtpauthUri — otpauth:// import for authenticator apps",
        ],
        description:
          "Time-based one-time passwords for vault 2FA: RFC 4648 base32 decoding, HMAC-SHA1/256/512 dynamic truncation, 6/8 digits over 30/60-second windows with a live countdown.",
        prHighlight: "lib/crypto/totp.ts",
        metrics: "SHA-256 · 6–8 digits · 30/60s",
      },
      {
        id: "key-store",
        label: "SecureStore Vault Key",
        version: "Key Storage",
        badge: "Enclave · vault-key-store.ts",
        commits: [
          "storeVaultKeyForBiometric — requireAuthentication: true",
          "retrieveVaultKeyWithBiometric — gated read prompt",
          "enclave.wrapped_vault_key — hardware-wrapped key entry",
        ],
        description:
          "The derived vault key is NEVER stored in plaintext — expo-secure-store wraps it in a device hardware key gated by requireAuthentication biometric auth, enabling fast unlock without re-running Argon2id.",
        prHighlight: "lib/auth/vault-key-store.ts",
        metrics: "Device-encrypted · Biometric-gated",
      },
      {
        id: "biometric",
        label: "Biometric Unlock Gate",
        version: "Local Auth",
        badge: "FaceID · Touch ID",
        commits: [
          "getBiometricCapability — hardware, enrolled & type probe",
          "BiometricType — face / fingerprint / iris mapping",
          "OS-aware labels — Face ID, Touch ID, Fingerprint",
        ],
        description:
          "expo-local-authentication capability probe and gate. The app only loads the vault key after a successful biometric challenge; unsupported or unenrolled devices fall back to a PIN.",
        prHighlight: "lib/auth/biometric.ts",
        metrics: "Face ID · Touch ID · Fallback PIN",
      },
      {
        id: "sqlite",
        label: "SQLite Vault Repository",
        version: "Local-First",
        badge: "Data · sqlite-repository.ts",
        commits: [
          "PRAGMA journal_mode = WAL — concurrent reads",
          "vault_items — encrypted_data + iv columns",
          "On-demand auto-initialization with singleton db",
        ],
        description:
          "expo-sqlite async repository with WAL mode, foreign keys enabled, and tables for vault_meta, vault_items, and tags. Only encrypted blobs are persisted — plaintext never touches disk.",
        prHighlight: "lib/vault/sqlite-repository.ts",
        metrics: "WAL · Foreign keys · Ciphertext-only",
      },
      {
        id: "drive-sync",
        label: "Google Drive 3-Way Sync",
        version: "Sync",
        badge: "Cloud · drive provider",
        commits: [
          "mergeVaultItems — local / remote / conflict triage",
          "updated_at resolution rule for local vs remote wins",
          "conflict set surfaced for equal-timestamp divergences",
        ],
        description:
          "Item-level, timestamp-based 3-way merge against a Google Drive snapshot: local-only items are pushed, remote-only items are applied, and both-sided diffs resolve by the newer updated_at (soft-delete tombstones honored).",
        prHighlight: "lib/sync/merger.ts",
        metrics: "updated_at merge · Tombstones kept",
      },
      {
        id: "hibp",
        label: "Watchtower HIBP Audit",
        version: "Security",
        badge: "Breach · hibp.ts",
        commits: [
          "checkPasswordBreached — prefix query + Add-Padding header",
          "checkVaultBreaches — rate-limited batch audit",
          "sha1Hex — uppercase hex digest via quick-crypto",
        ],
        description:
          "k-anonymity breach check that only sends the first 5 hex characters of a SHA-1 hash off-device; the returned breach suffix list is matched locally against the rest of the hash.",
        prHighlight: "lib/security/hibp.ts",
        metrics: "k-anonymity · SHA-1 prefix",
      },
      {
        id: "recovery-phrase",
        label: "BIP39 Recovery Phrase",
        version: "Recovery",
        badge: "Mnemonic · @scure/bip39",
        commits: [
          "@scure/bip39 entropy → mnemonic words",
          "mnemonicToSeedSync — BIP39 seed derivation",
          "validateMnemonic — typo-guard on restore",
        ],
        description:
          "24-word BIP39 mnemonic generation and validation so the vault survives a lost device; the mnemonic re-derives a distinct recovery key, never the vault key itself.",
        prHighlight: "lib/generator/passphrase.ts + @scure/bip39",
        metrics: "BIP39 · 24 words",
      },
    ],
  },
  flow: {
    steps: [
      {
        id: "unlock",
        number: "01",
        title: "Biometric Unlock Gate",
        description:
          "App start probes hardware capability and challenges Face ID / Touch ID. The device store is only readable after a successful challenge — the app holds no vault key in memory beforehand.",
        tech: "expo-local-authentication · biometric.ts",
        codeFile: "biometric.ts",
        codeSnippet: `import * as LocalAuthentication from 'expo-local-authentication';

export async function getBiometricCapability(): Promise<BiometricCapability> {
  const available = await LocalAuthentication.hasHardwareAsync();
  if (!available) {
    return { available: false, enrolled: false, types: [], label: 'None' };
  }
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

  const biometricTypes: BiometricType[] = types.map((t) => {
    switch (t) {
      case LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION: return 'face';
      case LocalAuthentication.AuthenticationType.FINGERPRINT: return 'fingerprint';
      default: return 'iris';
    }
  });

  return { available, enrolled, types: biometricTypes, label };
}`,
        systemMetrics: {
          latency: "28ms",
          ops: "Local challenge",
          status: "ready",
        },
        logs: [
          "hasHardwareAsync → true (device supports biometrics)",
          "isEnrolledAsync → true (Face ID enrolled)",
          "Biometric challenge passed — vault key store unlocked",
        ],
      },
      {
        id: "key-load",
        number: "02",
        title: "SecureStore Key Load",
        description:
          "retrieveVaultKeyWithBiometric reads the hardware-wrapped vault key with requireAuthentication: true — the OS biometric dialog is prompted at read time and any dismissal throws.",
        tech: "expo-secure-store · vault-key-store.ts",
        codeFile: "vault-key-store.ts",
        codeSnippet: `import * as SecureStore from 'expo-secure-store';

export async function retrieveVaultKeyWithBiometric(): Promise<string> {
  const key = await SecureStore.getItemAsync(KEYS.wrappedVaultKey, {
    requireAuthentication: true,
    authenticationPrompt: 'Unlock Enclave',
  });
  if (!key) throw new Error('No biometric vault key stored');
  return key;
}`,
        systemMetrics: {
          latency: "52ms",
          ops: "1 decryption key",
          status: "healthy",
        },
        logs: [
          "SecureStore.getItem 'enclave.wrapped_vault_key'",
          "requireAuthentication gate satisfied by OS keychain",
          "Vault key loaded — never persisted in plaintext",
        ],
      },
      {
        id: "decrypt",
        number: "03",
        title: "AES-GCM Authenticated Decrypt",
        description:
          "Each vault item is decrypted with AES-256-GCM: the 128-bit auth tag is split from the ciphertext and asserted before JSON decode, so any tampered record throws instead of rendering garbage.",
        tech: "react-native-quick-crypto · encryption.ts",
        codeFile: "encryption.ts",
        codeSnippet: `export async function decryptJson<T>(vaultKeyBase64: string, blob: EncryptedBlob): Promise<T> {
  const keyBytes = Buffer.from(vaultKeyBase64, 'base64');
  const combined = Buffer.from(blob.ciphertext, 'base64');

  const ciphertext = combined.subarray(0, combined.length - AUTH_TAG_LENGTH);
  const authTag = combined.subarray(combined.length - AUTH_TAG_LENGTH);

  const decipher = QuickCrypto.createDecipheriv('aes-256-gcm', keyBytes, Buffer.from(blob.iv, 'base64')) as any;
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(decrypted.toString('utf8')) as T;
}`,
        systemMetrics: {
          latency: "3.1ms",
          ops: "~2.4k items/s",
          status: "healthy",
        },
        logs: [
          "subarray split at len-16 (auth tag boundary)",
          "setAuthTag verified — record integrity OK",
          "JSON.parse → VaultItemRow",
        ],
      },
      {
        id: "totp",
        number: "04",
        title: "TOTP Generation Window",
        description:
          "OTP secrets stored in the vault feed generateTotp: base32 decode → HMAC dynamic truncation → zero-padded code with live remainingSeconds countdown.",
        tech: "RFC 6238 · totp.ts",
        codeFile: "totp.ts",
        codeSnippet: `export function generateTotp(config: TotpConfig): TotpResult {
  const { secret, digits = 6, period = 30 } = config;
  const secretBytes = base32Decode(secret);
  const now = Math.floor(Date.now() / 1000);
  const counter = Math.floor(now / period);
  const remainingSeconds = period - (now % period);

  return {
    code: hotp(secretBytes, counter, digits),
    remainingSeconds,
    periodSeconds: period,
  };
}`,
        systemMetrics: {
          latency: "0.4ms",
          ops: "30s window",
          status: "processing",
        },
        logs: [
          "counter = floor(epoch / 30)",
          "dynamic truncation offset = digest[len-1] & 0x0f",
          "code 6-digit · 24s remaining in window",
        ],
      },
      {
        id: "sync",
        number: "05",
        title: "Google Drive 3-Way Merge",
        description:
          "On sync, local SQLite rows are reconciled against the Drive snapshot with item-level timestamp rules — tombstones from soft-deletes win whenever newer; equal-timestamp divergences surface as conflicts.",
        tech: "Drive provider · merger.ts",
        codeFile: "merger.ts",
        codeSnippet: `if (local && remote) {
  const localTime = new Date(local.updatedAt).getTime();
  const remoteTime = new Date(remote.updatedAt).getTime();

  if (remoteTime > localTime) {
    toUpsert.push({ ...remote, syncDirty: 0 });   // remote wins
  } else if (localTime > remoteTime) {
    mergedMap.set(id, local);                       // local wins
  } else if (local.encryptedData !== remote.encryptedData) {
    conflicts.push({ id, local, remote });          // equal timestamp, diverged
  }
}`,
        systemMetrics: {
          latency: "412ms",
          ops: "N items merged",
          status: "ready",
        },
        logs: [
          "72 local rows · 70 remote rows → 68 common ids",
          "2 remote-only records applied to local store",
          "1 equal-timestamp divergence → conflict set (prefer remote)",
        ],
      },
    ],
    archMermaid: `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef crypto fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef sync fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;

    subgraph Device["React Native / Expo App (Local-First)"]
        UI["Vault UI (Expo Router)"]:::client
        Store["SQLite Vault Repository"]:::client
        Secure["SecureStore Vault Key"]:::client
        Bio["Biometric Unlock Gate"]:::client
    end

    subgraph Crypto["Native Crypto Engine (react-native-quick-crypto)"]
        Argon["Argon2id KDF (64MB · 3 passes)"]:::crypto
        GCM["AES-256-GCM Authenticated Cipher"]:::crypto
        TOTP["RFC 6238 TOTP Engine"]:::crypto
        BIP39["BIP39 Recovery Phrase"]:::crypto
    end

    subgraph Cloud["Personal Cloud Layer"]
        Drive["Google Drive Provider"]:::sync
        Merge["3-Way Item Merge (updated_at)"]:::sync
        HIBP["HIBP k-Anonymity Audit"]:::sync
    end

    UI --> Bio
    Bio --> Secure
    Secure --> Argon
    Argon --> GCM
    GCM --> Store
    TOTP --> UI
    Store --> Merge
    Merge --> Drive
    BIP39 --> UI
    HIBP -.-> UI`,
    seqMermaid: `sequenceDiagram
    autonumber
    actor Owner as Vault Owner
    participant UI as Enclave Expo App
    participant Auth as Local Authentication (FaceID / Touch ID)
    participant KDF as Argon2id (quick-crypto)
    participant Cipher as AES-256-GCM
    participant Store as SQLite Repository
    participant Drive as Google Drive Provider

    Owner->>UI: Open vault
    UI->>Auth: Request biometric challenge
    Auth-->>UI: LocalAuthentication success
    UI->>KDF: Derive 256-bit key (salt + password)
    KDF-->>UI: vaultKey (base64, never plaintext)
    UI->>Cipher: decrypt(record)
    Cipher-->>UI: plaintext record
    Owner->>UI: Read TOTP / add item
    UI->>Store: upsert encrypted blob
    UI->>Drive: push remote snapshot
    Drive-->>UI: merge(remote, local) 3-way
    alt Remote updated by another device
        Store-->>UI: apply remote item rows
    else Local was newer
        Drive-->>UI: push local rows, keep tombstones
    end`,
  },
  codeModules: [
    {
      id: "encryption",
      filename: "lib/crypto/encryption.ts",
      badge: "AES-256-GCM",
      title: "Authenticated Vault Encryption",
      description:
        "AES-256-GCM via react-native-quick-crypto: random 96-bit IV, 128-bit auth tag appended to the ciphertext, base64 wire-format blobs. verify-then-decode keeps tampered records from ever rendering.",
      prHighlight: "lib/crypto/encryption.ts",
      code: `import { Buffer } from 'buffer';
import QuickCrypto from 'react-native-quick-crypto';

const IV_LENGTH = 12; // 96-bit IV for AES-GCM
const AUTH_TAG_LENGTH = 16; // 128-bit auth tag

export interface EncryptedBlob {
  ciphertext: string; // base64 (ciphertext + auth tag)
  iv: string; // base64
}

export async function encryptJson<T>(vaultKeyBase64: string, plaintext: T): Promise<EncryptedBlob> {
  const keyBytes = Buffer.from(vaultKeyBase64, 'base64');
  const iv = QuickCrypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const plaintextBytes = Buffer.from(JSON.stringify(plaintext), 'utf8');

  const cipher = QuickCrypto.createCipheriv('aes-256-gcm', keyBytes, iv) as any;
  const encrypted = Buffer.concat([cipher.update(plaintextBytes), cipher.final()]);
  const authTag: Buffer = cipher.getAuthTag();

  const combined = Buffer.concat([encrypted, authTag]);
  return { ciphertext: combined.toString('base64'), iv: Buffer.from(iv).toString('base64') };
}

export async function decryptJson<T>(vaultKeyBase64: string, blob: EncryptedBlob): Promise<T> {
  const keyBytes = Buffer.from(vaultKeyBase64, 'base64');
  const iv = Buffer.from(blob.iv, 'base64');
  const combined = Buffer.from(blob.ciphertext, 'base64');

  const ciphertext = combined.subarray(0, combined.length - AUTH_TAG_LENGTH);
  const authTag = combined.subarray(combined.length - AUTH_TAG_LENGTH);

  const decipher = QuickCrypto.createDecipheriv('aes-256-gcm', keyBytes, iv) as any;
  decipher.setAuthTag(authTag);
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return JSON.parse(decrypted.toString('utf8')) as T;
}`,
    },
    {
      id: "kdf",
      filename: "lib/crypto/key-derivation.ts",
      badge: "Argon2id",
      title: "Native Key Derivation",
      description:
        "256-bit vault key from master password + 32-byte salt using native Argon2id with 64MB memory, 3 passes, and a single lane; recovery phrase re-derives a separate key.",
      prHighlight: "lib/crypto/key-derivation.ts",
      code: `import { Buffer } from 'buffer';
import QuickCrypto from 'react-native-quick-crypto';

export const SALT_LENGTH = 32; // bytes

export function generateSalt(): string {
  const bytes = QuickCrypto.randomBytes(SALT_LENGTH);
  return Buffer.from(bytes).toString('base64');
}

export async function deriveVaultKey(masterPassword: string, saltBase64: string): Promise<string> {
  const salt = Buffer.from(saltBase64, 'base64');

  return new Promise<string>((resolve, reject) => {
    QuickCrypto.argon2(
      'argon2id',
      {
        message: masterPassword,
        nonce: salt,
        parallelism: 1,
        tagLength: 32,
        memory: 65536, // 64MB
        passes: 3,
      },
      (err, result) => {
        if (err) reject(err);
        else resolve(result.toString('base64'));
      },
    );
  });
}`,
    },
    {
      id: "hibp",
      filename: "lib/security/hibp.ts",
      badge: "k-Anonymity",
      title: "Watchtower Breach Audit",
      description:
        "Have-I-Been-Pwned check that only ships the first 5 hex chars of a SHA-1 hash off-device — the breach suffix list is matched locally, and batch audits are rate-limited politely.",
      prHighlight: "lib/security/hibp.ts",
      code: `import { sha1Hex } from '@/lib/crypto';

export async function checkPasswordBreached(password: string): Promise<HibpResult> {
  const hash = sha1Hex(password);
  const prefix = hash.slice(0, 5);          // only prefix leaves the device
  const suffix = hash.slice(5);

  const response = await fetch(\`https://api.pwnedpasswords.com/range/\${prefix}\`, {
    headers: { 'Add-Padding': 'true' },
  });
  if (!response.ok) throw new Error(\`HIBP API error: \${response.status}\`);

  const text = await response.text();
  for (const line of text.split('\\n')) {
    const [lineSuffix, countStr] = line.trim().split(':');
    if (lineSuffix?.toUpperCase() === suffix) {
      const count = parseInt(countStr ?? '0', 10);
      return { pwned: count > 0, count };
    }
  }
  return { pwned: false, count: 0 };
}`,
    },
  ],
};

export default enclaveShowcase;
