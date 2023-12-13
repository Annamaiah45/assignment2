import "./App.css";
import Categories from "./Header";
import Footer from "./Footer";
import Grid from "./LatestPost";
export default function App() {
  return (
    <>
      <div className="top-bar">
        <a
          style={{
            width: "10%"
          }}
          href="https://www.edyoda.com/stories"
          className="logo_container"
        >
        </a>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "70%"
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "flex-end"
              // textAlign:"center"
            }}
          >
            <p
              style={{
                fontSize: "15px",
                letterSpacing: "1px",
                opacity: "20%",
                lineHeight: "1",
                wordSpacing: "5px",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >              
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "20%",
              justifyContent: "right"
            }}
          >
            
          </div>
        </div>
      </div>
      <div
        style={{
          width: "75%",
          // backgroundColor: "blue",
          // height:"auto",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Categories />
        <Grid />
      </div>
      <Footer />
    </>
  );
}
