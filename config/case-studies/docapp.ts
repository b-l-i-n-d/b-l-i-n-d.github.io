import type { ProjectShowcase } from "@/types/portfolio";

const docAppShowcase: ProjectShowcase = {
  graph: {
    navTitle: "Interactive Architecture Map",
    navSubtitle:
      "Inspect the cookie-JWT auth layer, the component-based booking domain, and the render/ops stack",
    title: "DocApp Booking Platform Architecture Graph",
    countLabel: "9 Core Systems",
    verifyLabel: "Source modules verified in b-l-i-n-d/docapp",
    verifyUrl: "https://github.com/b-l-i-n-d/docapp",
    inspectLabel: "Inspect Source",
    commitsHeading: "Key Source Modules (b-l-i-n-d/docapp):",
    commitPrefix: "src:",
    columns: [
      {
        title: "Auth & Portal",
        nodeIds: ["cookie-jwt", "rbac", "email-notify"],
        accent: "rose",
      },
      {
        title: "Booking Domain",
        nodeIds: ["components-api", "doctor-search", "appointment-ledger"],
        accent: "emerald",
      },
      {
        title: "Render & Ops",
        nodeIds: ["react-pdf", "cloudinary", "analytics"],
        accent: "sky",
      },
    ],
    nodes: [
      {
        id: "cookie-jwt",
        label: "Rotating Cookie JWT",
        version: "Auth",
        badge: "verifyAccessToken.js",
        commits: [
          "verifyAccessToken.js — access token in httpOnly cookie",
          "res.cookie overwrite — renewed JWT in place on expiry",
          "Invalid-secret path clears cookie and 406s",
        ],
        description:
          "Access token rides in a cookie; when it expires mid-session the middleware re-signs fresh user data into a new JWT and overwrites the cookie. A bad secret clears the cookie and returns 406.",
        prHighlight: "server/middlewares/auth/verifyAccessToken.js",
        prUrl:
          "https://github.com/b-l-i-n-d/docapp/blob/master/server/middlewares/auth/verifyAccessToken.js",
        metrics: "HttpOnly · Rotates in place",
      },
      {
        id: "rbac",
        label: "Multi-Role Portal Guards",
        version: "RBAC",
        badge: "AdminOnly · UserOnly · isDoctor",
        commits: [
          "isAdmin.js — role gate on res.locals.data._id",
          "dashboards split by role in the client",
          "menu guards conditionally render portals",
        ],
        description:
          "Role-checked middleware chains guard the admin dashboard, doctor dashboards, and patient portal. isAdmin 403s any non-admin role after looking the user up by id.",
        prHighlight: "server/middlewares/auth/isAdmin.js",
        prUrl: "https://github.com/b-l-i-n-d/docapp/blob/master/server/middlewares/auth/isAdmin.js",
        metrics: "Admin · Doctor · Patient",
      },
      {
        id: "email-notify",
        label: "NodeMailer + Handlebars",
        version: "Mail",
        badge: "reset · welcome · notifications",
        commits: [
          "requestChangePassword — reset mail with verification",
          "handlebars layouts for doctor/password emails",
          "notifications digest on appointment events",
        ],
        description:
          "Templated outbound email via NodeMailer with Handlebars layouts: password-reset flows, portal notifications, and doctor-facing alerts.",
        prHighlight: "server/utils/helpers/email",
        prUrl: "https://github.com/b-l-i-n-d/docapp",
        metrics: "NodeMailer · Handlebars",
      },
      {
        id: "components-api",
        label: "Component-Based Express API",
        version: "Express",
        badge: "users · doctors · appointments",
        commits: [
          "server/components/<domain> — model + controller + routes",
          "server/bootstrap.js — mounts routes per component",
          "index.js barrel exports per component",
        ],
        description:
          "Each domain is its own component exposing a model, controller, and routes — departments, districts, workplaces, doctors, and appointments — wired centrally at boot. A classic deep-module layout.",
        prHighlight: "server/components",
        prUrl: "https://github.com/b-l-i-n-d/docapp/tree/master/server/components",
        metrics: "Modular · 6 domains",
      },
      {
        id: "doctor-search",
        label: "Doctor Search & Profiles",
        version: "Query",
        badge: "departments · districts · workplaces",
        commits: [
          "doctors controller — department / district / workplace filters",
          "Doctor grid cards + details modal",
          "Cloudinary image upload on enrollment",
        ],
        description:
          "Patient portal filters doctors by department, district, and workplace with a card grid and details modal; doctor records carry Cloudinary-backed photos and chamber info.",
        prHighlight: "server/components/doctors/doctors.controller.js",
        prUrl:
          "https://github.com/b-l-i-n-d/docapp/blob/master/server/components/doctors/doctors.controller.js",
        metrics: "Triple filter · Card grid",
      },
      {
        id: "appointment-ledger",
        label: "Appointment Ledger Controller",
        version: "Booking",
        badge: "appointments.controller.js",
        commits: [
          "createAppointment — ObjectId + doctor existence validation",
          "Appointment.create with patient demographics",
          "me + doctorId + date filtered feeds, recent-5",
        ],
        description:
          "createAppointment rejects invalid ObjectIds and unknown doctors, then persists the patient's booking with date, name, age, gender, type, and phone. Doctor feeds expose recent-5 and date-filtered queues.",
        prHighlight: "server/components/appointments/appointments.controller.js",
        prUrl:
          "https://github.com/b-l-i-n-d/docapp/blob/master/server/components/appointments/appointments.controller.js",
        metrics: "Validated · Scoped feeds",
      },
      {
        id: "react-pdf",
        label: "React-PDF Dossier Export",
        version: "Render",
        badge: "@react-pdf/renderer",
        commits: [
          "generateAppointmentsPdf.jsx — Document + Page layout",
          "PdfReport reusable sections",
          "Font theme — Times-Roman body, Courier meta",
        ],
        description:
          "Client-side generator builds an A4 medical telephone record from appointment records — header/footer chrome, sectioned layouts, and one-click PDF download.",
        prHighlight: "client/src/services/generateAppointmentsPdf.jsx",
        prUrl:
          "https://github.com/b-l-i-n-d/docapp/blob/master/client/src/services/generateAppointmentsPdf.jsx",
        metrics: "A4 · Client-rendered",
      },
      {
        id: "cloudinary",
        label: "Cloudinary Asset Pipeline",
        version: "Media",
        badge: "imageUpload · imageDelete",
        commits: [
          "cloudinary config in server/configs",
          "imageUpload — avatar upload contracts",
          "imageDelete — signed remote teardown",
        ],
        description:
          "Doctor photos and profile assets upload to Cloudinary with signed destruction so removed profiles clean up after themselves.",
        prHighlight: "server/utils/helpers · cloudinary",
        prUrl: "https://github.com/b-l-i-n-d/docapp",
        metrics: "Signed uploads",
      },
      {
        id: "analytics",
        label: "Chart.js Admin Dashboards",
        version: "Telemetry",
        badge: "admin charts · RTK Query",
        commits: [
          "admin chart endpoints + RTK hooks",
          "Chart.js line/bar summaries",
          "notifications digest feed",
        ],
        description:
          "Admin dashboard aggregates bookings, doctors, and users over time, rendered with Chart.js via RTK Query, plus a notifications digest to keep staff topped-up.",
        prHighlight: "client/src — dashboard + charts",
        prUrl: "https://github.com/b-l-i-n-d/docapp",
        metrics: "Live charts · Digest feed",
      },
    ],
  },
  flow: {
    steps: [
      {
        id: "login",
        number: "01",
        title: "Login & Cookie JWT Rotation",
        description:
          "VerifyAccessToken middleware reads the cookie-borne access token. On expiry it re-signs fresh user data into a new JWT and overwrites the cookie in place; an invalid secret clears the cookie and 406s.",
        tech: "jsonwebtoken · httpOnly cookies",
        codeFile: "server/middlewares/auth/verifyAccessToken.js",
        codeSnippet: `const verifyAccessToken = async (req, res, next) => {
    const accessToken = req.cookies[cookiesConfig.access.name];
    const verifyToken = await helpers.verifyJWT(accessToken, jwtConfig.ACCESS_SECRET);

    if (verifyToken.isExpired) {
        const userId = res.locals.data._id;
        const userData = await userModel.findById(userId)
            .select('_id name email role isDoctor').lean();

        const encryptedData = await jwt.sign(userData, jwtConfig.ACCESS_SECRET, {
            expiresIn: jwtConfig.ACCESS_EXP,
        });

        res.cookie(cookiesConfig.access.name, encryptedData, {
            ...cookiesConfig.access.options,
            overwrite: true,
        });
    } else if (verifyToken.isSecretNotValid) {
        res.clearCookie(cookiesConfig.access.name);
        return res.status(406).json({
            isAuth: false,
            error: 'Your credentials are invalid. Please try login again.',
        });
    }

    return next();
};`,
        systemMetrics: {
          latency: "14ms",
          ops: "In-place rotation",
          status: "ready",
        },
        logs: [
          "Login route issued access + refresh cookies",
          "verifyAccessToken — token valid, passing through",
          "Expired mid-session → re-signed JWT overwrites cookie",
        ],
      },
      {
        id: "doctor",
        number: "02",
        title: "Doctor Enrollment & Search",
        description:
          "Doctors sign up with department, district and workplace filters; their Cloudinary image is uploaded as a signed asset and the profile lands in the searchable grid.",
        tech: "Cloudinary · doctors model",
        codeFile: "server/components/doctors/doctors.controller.js",
        codeSnippet: `const createDoctor = async (req, res) => {
    const { user } = req;
    const { title, name, dateOfBirth, image, gender, doctorType,
            nationalId, bmdcRegNo, department, specialized, workplace, chamber } = req.body;

    const imageResult = image && (await helpers.imageUpload(image, user._id));

    const newDoctor = await Doctor.create({
        userId: user._id,
        title,
        name,
        dateOfBirth,
        image: imageResult.secure_url,
        doctorType,
        nationalId,
        bmdcRegNo,
        email: user.email,
        department,
        specialized,
        workplace,
        chamber,
    });

    if (newDoctor) {
        // notify + expose in the filtered search grid
    }
};`,
        systemMetrics: {
          latency: "86ms",
          ops: "Signed upload",
          status: "healthy",
        },
        logs: [
          "imageUpload → secure_url persisted in profile",
          "Doctor.create committed to doctors collection",
          "Grid now matches department / district / workplace",
        ],
      },
      {
        id: "appointment",
        number: "03",
        title: "Book Appointment",
        description:
          "createAppointment validates the doctor ObjectId, confirms the doctor exists, then creates the booking with date, name, age, gender, type, and phone for the signed-in patient.",
        tech: "Mongoose · res.locals.data._id",
        codeFile: "server/components/appointments/appointments.controller.js",
        codeSnippet: `const createAppointment = async (req, res) => {
    const { doctorId, name, age, gender, date, type, phone } = req.body;
    const userId = res.locals.data._id;

    if (!mongoose.Types.ObjectId.isValid(doctorId)) {
        return res.status(400).json({ error: 'Invalid doctor id' });
    }

    const doctor = await doctorsModel.findById(doctorId).lean();
    if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
    }

    const appointment = await Appointment.create({
        doctorId, userId, date: new Date(date), name, age, gender, type, phone,
    });

    return res.status(200).json(appointment);
};`,
        systemMetrics: {
          latency: "22ms",
          ops: "1 booking",
          status: "processing",
        },
        logs: [
          "ObjectId.isValid(doctorId) → true",
          "doctorsModel.findById → 200-slot doctor found",
          "Appointment.create committed — ledger updated",
        ],
      },
      {
        id: "queues",
        number: "04",
        title: "Doctor Queues & Date Filters",
        description:
          "getAppointments serves the patient's own feed ('me'), a doctor's recent-5 queue, or date-filtered lists by doctor — all with populated doctor names and pagination.",
        tech: "Mongoose populate · paginate",
        codeFile: "server/components/appointments/appointments.controller.js",
        codeSnippet: `if (lastSegment !== 'me') {
    if (recent === 'true' && doctorId) {
        return res.status(200).json(
            await Appointment.find({ doctorId })
                .populate('doctorId', 'name')
                .sort({ createdAt: -1 })
                .limit(5)
                .lean()
        );
    }
    appointments = Appointment.find({ doctorId })
        .populate('doctorId', 'name')
        .lean();
} else if (lastSegment === 'me') {
    appointments = Appointment.find({ userId })
        .populate('doctorId', 'name')
        .sort({ date: -1 })
        .lean();
}`,
        systemMetrics: {
          latency: "31ms",
          ops: "Recent-5 / dated",
          status: "ready",
        },
        logs: [
          "GET appointments/me → patient's ledger",
          "Doctor queue recent-5 → 5 rows populated",
          "date + doctorId filter applied on request",
        ],
      },
      {
        id: "pdf",
        number: "05",
        title: "Export PDF Dossier",
        description:
          "generateAppointmentsPdf renders a sectioned A4 medical report from the appointment records — fixed header/footer chrome and Courier/Times-Roman typography — then triggers the download.",
        tech: "@react-pdf/renderer · dayjs",
        codeFile: "client/src/services/generateAppointmentsPdf.jsx",
        codeSnippet: `const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        height: 50,
        top: 0, left: 0, right: 0,
        color: 'gray',
        paddingHorizontal: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Courier',
        fontSize: 8,
    },
    page: {
        fontFamily: 'Times-Roman',
        fontSize: 11,
        padding: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
});

function GeneratedAppiontmentPdf({ date, doctor, appointments }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header} fixed>
                    <Text>Docapp</Text>
                </View>
            </Page>
        </Document>
    );
}`,
        systemMetrics: {
          latency: "210ms",
          ops: "A4 download",
          status: "healthy",
        },
        logs: [
          "Appointment.dossier assembled from ledger rows",
          "PDF Document rendered client-side",
          "Download initiated — A4 medical summary",
        ],
      },
    ],
    archMermaid: `flowchart TD
    classDef client fill:#1e1e24,stroke:#ff1744,stroke-width:1.5px,color:#fff;
    classDef engine fill:#131d1b,stroke:#10b981,stroke-width:1.5px,color:#fff;
    classDef backend fill:#131a26,stroke:#0ea5e9,stroke-width:1.5px,color:#fff;

    subgraph Client["Vite / React Client (client/)"]
        UI["Ant Design + Tailwind/daisyUI"]:::client
        RTK["RTK Query APIs + Portals"]:::client
        PDF["React-PDF Dossier"]:::client
        Charts["Chart.js Dashboards"]:::client
    end

    subgraph Auth["Authentication Layer"]
        Cookie["Cookie-Borne JWT"]:::engine
        Rotation["Access-Token Rotation"]:::engine
        Roles["Admin / Doctor / Patient Guards"]:::engine
    end

    subgraph Server["Component-Based Express API (server/)"]
        Appointments["Appointments Controller + Model"]:::backend
        Doctors["Doctors · Departments · Districts · Workplaces"]:::backend
        Users["Users + Multi-Role Guards"]:::backend
        Mongo[("MongoDB (Mongoose)")]:::backend
        Cloudinary["Cloudinary Uploads"]:::backend
        Mail["NodeMailer + Handlebars Emails"]:::backend
    end

    UI --> RTK
    RTK --> Cookie
    Cookie --> Rotation
    Rotation --> Roles
    Roles --> Appointments
    Roles --> Users
    UI --> PDF
    UI --> Charts
    Appointments --> Mongo
    Doctors --> Mongo
    Users --> Mongo
    Doctors --> Cloudinary
    Users --> Mail
    Appointments --> Mail`,
    seqMermaid: `sequenceDiagram
    autonumber
    actor Patient as Registered Patient
    participant UI as React Client
    participant RTK as RTK Query
    participant Auth as Cookie JWT Middleware
    participant API as Appointments Component
    participant DB as MongoDB (Mongoose)

    Patient->>UI: Login / Register
    UI->>RTK: dispatch auth
    RTK->>Auth: request with access cookie
    Auth-->>UI: access token ok (rotated on expiry)

    Patient->>UI: Filter doctors (department / district)
    UI->>RTK: getDoctors(filter)
    RTK->>DB: query via doctors model
    DB-->>UI: doctor cards

    Patient->>UI: Book appointment (doctorId, date, ...)
    UI->>RTK: create appointment mutation
    RTK->>Auth: POST /appointments
    Auth->>API: verifyAccessToken -> createAppointment
    API->>API: ObjectId + doctor existence validation
    API->>DB: Appointment.create(...)
    DB-->>API: saved appointment
    API-->>UI: HTTP 200 (ledger updated)

    Patient->>UI: Export dossier
    UI->>PDF: generateAppointmentsPdf(ledger)
    PDF-->>Patient: downloadable medical summary`,
  },
  codeModules: [
    {
      id: "appointments",
      filename: "server/components/appointments/appointments.controller.js",
      badge: "Booking Ledger",
      title: "Appointment Ledger Controller",
      description:
        "Validated booking creation (ObjectId + doctor existence) plus scoped feeds: the patient's own ledger, a doctor's recent-5 queue, and date-filtered lists with populated doctor names.",
      prUrl:
        "https://github.com/b-l-i-n-d/docapp/blob/master/server/components/appointments/appointments.controller.js",
      prHighlight: "server/components/appointments/appointments.controller.js",
      code: `import mongoose from 'mongoose';
import { helpers } from '../../utils/index.js';
import { doctorsModel } from '../doctors/index.js';
import Appointment from './appointments.model.js';

const createAppointment = async (req, res) => {
    const { doctorId, name, age, gender, date, type, phone } = req.body;
    const userId = res.locals.data._id;

    try {
        if (!mongoose.Types.ObjectId.isValid(doctorId)) {
            return res.status(400).json({ error: 'Invalid doctor id' });
        }

        const doctor = await doctorsModel.findById(doctorId).lean();
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }

        const appointment = await Appointment.create({
            doctorId,
            userId,
            date: new Date(date),
            name,
            age,
            gender,
            type,
            phone,
        });

        return res.status(200).json(appointment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAppointments = async (req, res) => {
    const userId = res.locals.data._id;
    const { page, limit, doctorId, count, date, recent } = req.query;
    const lastSegment = req.originalUrl.split('?')[0].split('/').pop();

    if (lastSegment !== 'me' && recent === 'true' && doctorId) {
        return res.status(200).json(
            await Appointment.find({ doctorId })
                .populate('doctorId', 'name')
                .sort({ createdAt: -1 })
                .limit(5)
                .lean()
        );
    }

    const appointments = lastSegment === 'me'
        ? Appointment.find({ userId }).populate('doctorId', 'name').sort({ date: -1 }).lean()
        : Appointment.find({ doctorId }).populate('doctorId', 'name').lean();

    if (count === 'true') {
        return res.status(200).json((await appointments).length);
    }

    return res.status(200).json(await helpers.paginateQuery(appointments, page, limit));
};

export default { createAppointment, getAppointments };`,
    },
    {
      id: "verify-token",
      filename: "server/middlewares/auth/verifyAccessToken.js",
      badge: "JWT Rotation",
      title: "Rotating Access-Token Middleware",
      description:
        "Reads the cookie-borne JWT; on expiry re-signs user data into a fresh token and overwrites the cookie, and clears the cookie with a 406 when the secret is invalid.",
      prUrl:
        "https://github.com/b-l-i-n-d/docapp/blob/master/server/middlewares/auth/verifyAccessToken.js",
      prHighlight: "server/middlewares/auth/verifyAccessToken.js",
      code: `import jwt from 'jsonwebtoken';
import { userModel } from '../../components/users/index.js';
import { cookiesConfig, jwtConfig } from '../../configs/index.js';
import { helpers } from '../../utils/index.js';

const verifyAccessToken = async (req, res, next) => {
    const accessToken = req.cookies[cookiesConfig.access.name];

    const verifyToken = await helpers.verifyJWT(accessToken, jwtConfig.ACCESS_SECRET);

    if (verifyToken.isExpired) {
        const userId = res.locals.data._id;
        const userData = await userModel
            .findById(userId)
            .select('_id name email role isDoctor')
            .lean();

        const encryptedData = await jwt.sign(userData, jwtConfig.ACCESS_SECRET, {
            expiresIn: jwtConfig.ACCESS_EXP,
        });

        res.cookie(cookiesConfig.access.name, encryptedData, {
            ...cookiesConfig.access.options,
            overwrite: true,
        });

        res.locals.accessToken = {
            isAuth: true,
            message: 'created new accessToken',
            data: { accessToken: cookiesConfig.access.name },
        };
    } else if (verifyToken.isSecretNotValid) {
        res.clearCookie(cookiesConfig.access.name);
        return res.status(406).json({
            isAuth: false,
            error: 'Your credentials are invalid. Please try login again.',
        });
    }

    return next();
};

export default verifyAccessToken;`,
    },
    {
      id: "pdf",
      filename: "client/src/services/generateAppointmentsPdf.jsx",
      badge: "React-PDF",
      title: "Appointment Dossier Generator",
      description:
        "A4 medical report built with @react-pdf/renderer — fixed header chrome, Courier meta rows, Times-Roman body copy, and sectioned content driven by the appointment records.",
      prUrl:
        "https://github.com/b-l-i-n-d/docapp/blob/master/client/src/services/generateAppointmentsPdf.jsx",
      prHighlight: "client/src/services/generateAppointmentsPdf.jsx",
      code: `import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { PdfReport } from '../components';

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        height: 50,
        top: 0,
        left: 0,
        right: 0,
        color: 'gray',
        paddingHorizontal: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Courier',
        fontSize: 8,
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Courier',
        fontSize: 8,
    },
    page: {
        fontFamily: 'Times-Roman',
        fontSize: 11,
        padding: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
});

function GeneratedAppiontmentPdf({ date, doctor, appointments }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header} fixed>
                    <Text>Docapp</Text>
                </View>
                <PdfReport date={date} doctor={doctor} appointments={appointments} />
            </Page>
        </Document>
    );
}`,
    },
  ],
};

export default docAppShowcase;
