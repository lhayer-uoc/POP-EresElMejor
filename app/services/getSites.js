import { db } from "../config/db";
import { collection, getDocs } from "firebase/firestore";

const getSitesService = async () => {
  try {
    const sitesRef = await getDocs(collection(db, "Sites"));
    const sitesList = sitesRef.docs.map((doc) => ({
      key: doc.id,
      site: doc.data().site,
    }));
    return sitesList;
  } catch (error) {}
};

export default getSitesService;
