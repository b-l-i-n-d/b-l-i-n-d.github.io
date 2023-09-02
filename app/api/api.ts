export const getData = async () => {
    const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
    const res = await fetch(`${dbUrl}/.json`, {
        cache: "no-cache",
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};