import { useEffect } from "react";
import { auth } from "../firebase/config";

export default function FirebaseCheck() {
  useEffect(() => {
    console.log("Firebase Auth instance:", auth);
  }, []);

  return (
    <div className="p-4 bg-green-100 text-green-700 rounded">
      ✅ Firebase initialized! Check the console.
    </div>
  );
}
