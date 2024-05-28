import LeftPart from "../components/left.part";
import MenuMobile from "../components/mobile/menu";
import Preloader from "../components/preloader";
import RightPart from "../components/right.part";

export default function PortfolioPage() {
  return (
    <>
      <div className="arlo_tm_wrapper_all">
        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close">
            <a href="#"></a>
          </span>
        </div>
        <Preloader />
        <MenuMobile />

        <div className="arlo_tm_content">
          <LeftPart />
          <RightPart />
          <a className="arlo_tm_totop" href="#"></a>
        </div>
      </div>
    </>
  );
}
