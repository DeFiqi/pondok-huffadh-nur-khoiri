import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";
import GalleryClient from "./GalleryClient";

export default async function GalleryPage() {
await connectDB();

const items = await Gallery.find()
.sort({
createdAt: -1,
})
.lean();

const galleries = JSON.parse(
JSON.stringify(items)
);

return ( <GalleryClient
   galleries={galleries}
 />
);
}
