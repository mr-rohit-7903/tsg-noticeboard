import Announcement from "./Announcement";
import NoticeBox from "./NoticeBox";
import bgImage from "../assets/bgImage.jpg";
const Body = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center w-full" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="h-screen w-full" >
            <div className="bg-black/80">
                <Announcement />
                <NoticeBox />
            </div>
        </div>
    </div>
  );
}
export default Body;