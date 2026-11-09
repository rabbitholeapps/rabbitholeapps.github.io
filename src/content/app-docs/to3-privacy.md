---
app: to3
page: privacy
title: Privacy Policy
description: How Tō3 collects, uses, and protects information when you use live voice rooms and events.
navLabel: Privacy
order: 2
---

# Privacy Policy for Tō3

_Last updated: 9 November 2026_

Tō3 (“**we**,” “**our**,” or “**us**”) is published by **Rabbit Hole Apps**. This Privacy Policy explains how we collect, use, share, and protect information when you use the **Tō3** mobile application and related websites (for example, plan selection and billing pages).

By using Tō3, you agree to this policy. If you do not agree, do not use the App.

---

## 1. Who we are

**Data controller:** Justin Xavier Hale, doing business as Rabbit Hole Apps

**Privacy contact:** [rabbitholeapps26@gmail.com](mailto:rabbitholeapps26@gmail.com)  
**Legal hub:** [rabbitholeapps.com/legal](/legal/)

---

## 2. What Tō3 does

Tō3 provides **live, full-duplex voice communication** for events and crews. Hosts create events, share join codes, and participants may use the **microphone** when joining or hosting a live room. Events may be **public by default** unless you choose a private event.

---

## 3. Information we collect

Depending on how you use Tō3, we may process:

### 3.1 Account and profile

- **Authentication identifiers** (Firebase Authentication user ID).
- **Sign-in provider data** when you use **Google** or **Apple** (for example, email address, display name, and profile photo if the provider shares them).
- **Profile fields you add** (for example, display name, optional profile photo).
- **Phone number** if you choose to verify a phone number on your profile (used for host discovery when you opt in).

### 3.2 Event and session data

- **Event information** you create or join (for example, titles, schedules, venue or location text, roles, invites, lobby state).
- **Session participation metadata** needed to operate rooms (for example, connection state, mute state, host/listener role).
- **Optional event images** you upload.

### 3.3 Real-time audio and optional recordings

When you participate in a live session, **audio is processed in real time** through our real-time communications infrastructure (**LiveKit** and related services) to deliver the session.

An eligible primary host may opt to record a session when taking it live. Tō3 displays a persistent notice to everyone in the room while recording is active. The resulting room-composite audio is stored as an MP3 in our Google Cloud / Firebase Storage infrastructure. Event hosts and co-hosts may download it through a short-lived link; listeners do not receive recording access through the App.

If you do not want your audio included in an active recording, leave the room. Hosts are responsible for using recording in accordance with applicable law and any event or organization rules.

**Secondary uses of recordings.** When a session is recorded, we may also use the resulting audio (and related session metadata such as roles or timing) to **research and improve live communication practices**, to **develop communication frameworks and training materials**, and to **develop, evaluate, and improve artificial-intelligence (AI) models and tools** that support those purposes. We may use service providers under contract—including AI and cloud processors—to help with that work. We do **not** sell recordings for third-party advertising. Where practical, we prefer aggregated or de-identified analysis; a composite recording may still include identifiable voices of people who spoke while recording was active.

### 3.4 Device permissions and on-device data

With your permission, the App may access:

- **Microphone**: required for hosts and participants who publish audio in a live room.
- **Contacts**: only when you use **Browse contacts** to invite hosts; we read contact entries you select for lookup, not your full address book in the background.
- **Photo library**: only when you choose to add a profile or event image.
- **Notifications**: if you opt in, to deliver alerts you request (for example, when a session goes live).

The App may store **limited preferences** on your device (for example, sign-in state or UI choices).

### 3.5 Diagnostics and analytics

- **Crash and stability data** (Firebase Crashlytics).
- **Product analytics** (Firebase Analytics / Google Analytics for Firebase) to understand aggregate usage and improve the App.
- **Push notification tokens** (Firebase Cloud Messaging) when you enable notifications.

### 3.6 Payments (website)

Subscriptions and day passes are purchased on our **website** via **Stripe**. **We do not process card payments inside the iOS or Android app.** Stripe collects payment and billing details according to [Stripe’s Privacy Policy](https://stripe.com/privacy). We receive subscription status and customer identifiers needed to grant paid features in the App.

### 3.7 Location

We **do not collect precise GPS location** from your device for tracking. You may type a venue or address when creating an event. If you use **location search**, your search text may be sent to **Google Places** to suggest addresses.

---

## 4. How we use information

We use information to:

- Provide, secure, and improve Tō3.
- Authenticate users and authorize access to events and rooms.
- Operate live audio sessions, optional recordings and host downloads, and related notifications.
- Research communication practices and develop communication frameworks and training materials from optional event recordings and related metadata.
- Develop, evaluate, and improve AI models and tools that support those communication frameworks and the Service, including through contracted processors where needed.
- Process subscriptions and entitlements (via Stripe and our servers).
- Diagnose crashes and understand aggregate usage.
- Comply with law and enforce our [EULA](/apps/to3/eula/) when necessary.

---

## 5. How we share information

We use service providers that process data on our behalf, including:

| Provider | Purpose |
|----------|---------|
| **Google Firebase / Google Cloud** | Authentication, database, storage, messaging, analytics, crash reporting, remote configuration, and recording-file storage |
| **LiveKit** | Real-time audio session and recording infrastructure |
| **Stripe** | Web checkout, subscriptions, and billing portal |
| **Google Places** | Optional address suggestions when creating events |
| **Google / Apple** | Sign-in |
| **AI / analysis processors (as used)** | Contracted tools that help us research recordings, develop communication frameworks, or train/evaluate AI models for those purposes |

We **do not sell** your personal information as “sale” is commonly understood under **CCPA/CPRA**. We **do not show third-party advertising** in Tō3.

We may disclose information if required by law or to protect rights, safety, and security.

---

## 6. Legal bases (EEA / UK)

Where the **GDPR** applies, we rely on:

- **Contract**: providing the service you requested.
- **Legitimate interests**: security, fraud prevention, debugging, aggregate analytics, product research, communication-framework development, and AI model development or evaluation using optional recordings where permitted.
- **Consent**: where required (for example, optional notifications, contacts access, or recording consent required by local law).

You may withdraw consent where applicable without affecting the lawfulness of processing before withdrawal.

---

## 7. Your rights (including California)

Depending on your region, you may have the right to **access**, **correct**, **delete**, **export**, or **object** to certain processing, and the right to **non-discrimination** for exercising privacy rights.

**California residents (CCPA/CPRA):** We do not sell personal information. You may request access to or deletion of personal information we hold. Contact us at the email below.

To **delete your account**, use **Profile → Delete account** in the App or email us. Deleting your account cancels active web subscriptions and forfeits remaining paid time as described in our billing terms.

We will verify requests and respond within the time required by applicable law.

---

## 8. Retention

We retain information as long as needed to provide Tō3 and for legitimate business needs (for example, security, backups, and legal compliance). Tō3 does not currently apply a general automatic retention deadline to all optional event recordings. Event hosts may request removal of a recording by emailing us.

When you delete your account, we cancel active subscriptions, delete your Firebase Authentication account and profile, and remove your account identifier from active event, participant, download-ticket, and organization records. If you created a shared event, Tō3 transfers operational ownership to an eligible remaining host when possible; otherwise the event is archived and its creator is anonymized.

If you were the sole host of an event, Tō3 stops any recording still in progress and deletes that event's stored MP3 before completing account deletion. A recording from an event with other hosts may remain because those hosts continue to have an interest in the shared event. We remove your account identifiers from the shared event, but the composite audio may still contain your **voice** if you spoke while recording was active. Contact [rabbitholeapps26@gmail.com](mailto:rabbitholeapps26@gmail.com) to request exceptional removal of a shared recording. Some records may be retained where law requires.

---

## 9. Security

We use reasonable technical and organizational measures to protect information. No method of transmission or storage is completely secure.

---

## 10. Children’s privacy

Tō3 is **not directed to children under 13**, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us information, contact us and we will take appropriate steps.

---

## 11. International transfers

If you access Tō3 from outside the United States, your information may be transferred to and processed in the United States and other countries where our providers operate. Where required, we use appropriate safeguards.

---

## 12. Changes

We may update this policy from time to time. We will post the new “Last updated” date at the top. Continued use after changes means you accept the updated policy.

---

## 13. Contact

Questions about this Privacy Policy, your data, or removal of a recording:

- **Email:** [rabbitholeapps26@gmail.com](mailto:rabbitholeapps26@gmail.com)
- **Legal hub:** [rabbitholeapps.com/legal](/legal/)
- **Tō3 app page:** [rabbitholeapps.com/apps/to3/](/apps/to3/)

---

**Tō3**: Live. Clear. Simple.  
Published by **Rabbit Hole Apps**.
