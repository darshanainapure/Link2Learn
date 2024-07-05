import React, { useState, useEffect } from "react";
import "./home.css";
import BannerImage1 from "./banner/1.jpg"; // Import your banner images
import BannerImage2 from "./banner/2.jpg";
import BannerImage3 from "./banner/3.jpg";
import BannerImage4 from "./banner/4.jpg";
import BannerImage5 from "./banner/5.jpg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CustomFooter from "./footer";
import { useNavigate } from "react-router-dom";


function HomePage({isAuthenticated}) {
  const navigate = useNavigate();
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const bannerImages = [
    BannerImage1,
    BannerImage2,
    BannerImage3,
    BannerImage4,
    BannerImage5,
  ];
  const randomIndex = Math.floor(Math.random() * bannerImages.length);
  const selectedBannerImage = bannerImages[randomIndex];

  const handleclass8 = () => {
    if(!isAuthenticated)
      {
        alert("Login to get access");
        navigate('/signin');
      }
      
    else
      navigate('/class8');
  };

  const handleclass9 = () => {
    if(!isAuthenticated)
      {
        alert("Login to get access");
        navigate('/signin');
      }
    else
      navigate('/class9');
  };
  const handleclass10 = () => {
    if(!isAuthenticated)
      {
        alert("Login to get access");
        navigate('/signin');
      }
    else
      navigate('/class10');
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prevIndex) => (prevIndex + 1) % 5); // Loop through slogans
    }, 5000); // Change slogan every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const slogans = [
    "Equitable Learning for All, SDG 4 in Action",
    "Empowering Underserved Learners, Bridging Educational Divides",
    "Quality Education for Every Student, Quality Resources",
    "Bridging Gaps, Providing Accessible Learning",
    "Empowering Students, Connecting Communities",
  ];




  return (
    <div >
      {/* <CustomNavbar /> */}
      
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image position-relative"
          style={{
            backgroundImage: `url(${selectedBannerImage})`,
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white slogan">
              {slogans[currentSloganIndex].split(",").map((line, index) => (
                <h1 key={index} className="mb-3">
                  {line}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </header>
      <section className="resource-section">
        <div className="resource-box">
          <div className="resource-content">
            <h2 className="resource-title">Find resources for</h2>
            <div className="resource-buttons">
            <div className="button-wrapper">
                {/* <Link to="/class10?class=class10">
                  <button className="btn btn-primary">Class 8</button>
                </Link> */}
              </div>
              <div className="button-wrapper">
                
                  <button onClick={handleclass8} className="btn btn-primary">Class 8</button>
                
              </div>
              <div className="button-wrapper">
             
                  <button onClick={handleclass9} className="btn btn-primary">Class 9</button>
               
              </div>
              <div className="button-wrapper">
               
                  <button onClick={handleclass10} className="btn btn-primary">Class 10</button>
              
              </div>
            </div>
            <br />
            <br />
            <h2 className="resource-title">
              We cover resources for you from various sources and top educators
            </h2>
            <div className="resource-icons">
              <div className="icon">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_lASM8tiZQBdS5QzV51QgSt6qYNYE--5X-vzxtScQ=s900-c-k-c0x00ffffff-no-rj"
                  alt="NCERT"
                />
                <span>NCERT</span>
              </div>
              <div className="icon">
                <img
                  src="https://static.toiimg.com/thumb/msid-103622050,width-400,resizemode-4/103622050.jpg"
                  alt="CBSE"
                />
                <span>CBSE</span>
              </div>
              <div className="icon">
                <img
                  src="https://cdn.pixabay.com/photo/2021/03/28/07/18/graduate-hat-6130500_1280.png"
                  alt="Online Platforms"
                />
                <span>Online Platforms</span>
              </div>
              <div className="icon">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
                  alt="YouTube"
                />
                <span>YouTube</span>
              </div>
              <div className="icon">
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/14/08/43/university-6936744_1280.png"
                  alt="Coaching institutes"
                />
                <span>Coaching institutes</span>
              </div>
              <div className="icon">
                <img
                  src="https://cdn.pixabay.com/photo/2022/11/11/13/32/e-book-7584995_1280.png"
                  alt="E-Books"
                />
                <span>E-Books</span>
              </div>
              <div className="icon">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/26/15/54/checklist-1622517_1280.png"
                  alt="Examination Boards"
                />
                <span>Examination Boards</span>
              </div>
              <div className="icon">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/13/12/20/add-159647_1280.png"
                  alt="Other sources"
                />
                <span>Other sources</span>
              </div>
              {/* Add more icons and labels here */}
            </div>
          </div>
        </div>
      </section>

      <div className="main-container-abc">
      {/* Competitive Exam Resources Section */}

     
      {/* Quality Education Section */}
      <div className="quality-section-xyz">
        <h2 className="resource-title">Quality Education for All</h2>
        <p className="description-section">
          At our platform, we are committed to providing quality education to everyone, regardless of their background or financial status. We believe that education is a fundamental right and should be accessible to all. With our comprehensive resources and experienced educators, we strive to empower learners and create a brighter future for generations to come.
        </p>
        <div className="image-container-abc">
          <img src="data:image/png;base64,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" alt="Quality Education Image 1" className="education-image-1" />
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXFxgXGBcWFxYYFhcXGBgWFxcXFxcYHSghGBolHRcVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGzAmICYtLy0vNS0rLS0tLy0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAEHAgj/xABCEAACAQIEBAUBBQUFCAIDAAABAhEAAwQSITEFBkFREyJhcYGRBzJCobEjUsHR8BQVYuHxFjNygpKistJDwiRTc//EABsBAAIDAQEBAAAAAAAAAAAAAAMEAQIFAAYH/8QAMxEAAgIBBAADBgQFBQAAAAAAAQIAAxEEEiExBSJBEzJRYXGhFEKBkRUjscHRBlLh8PH/2gAMAwEAAhEDEQA/AOrCtisFbrygzGTMit1lbFEXuQZuKzLW63RcSs1FaNbZgNSYHrUCYy2xhbin2IriJMsxW4rBW6OBKzIrIrdaFXxOnqK0n3q3NDMfxuxYdfFuqk6DMQP1q6Hzr9ZVujDTisqpheJ2rwm3cVx/hIP6VcU1rxcHM0KmSomWpEOlcZYT3WVoGsmqy80TWCsNYKGTzOm6ytVq40AmpLYGTOgbjuJP3R81FgG8tD+IX8zE1a4e3lrxOo1DW3FzNFUwmJeLVC9e6jc1UGVAkLnWo2Nen3qNqIpMsZG1V75NWGrxTFNxrff2ZUjIxBGOw+ZSDpWYTCwmXpFE7lsGo2ToK0P4gGsVm6xzK7SBxB9jDIBFZQfjvGlsXPD/AMIP1JrVMJqCVGEks7E8tOj4cyqn0Fewda8WxAA9K9A61mAwRklYK1W6IDKyhiuLIjhDuaHc081W8JbznU9ANye1TcT4QGJeYI1muRc332xGL8ISVtgRHUnrWhVUj4wfrFgbt5BHHpA3MvMuMxbE3LrBDtbQlUA9Y+980tWQbbZkYow6qSp+op4xnLNxrQyjWkviGCuWmIdYrRQKBgRh6yPSdS+zb7RrpuphcW2cPpbuneeit3nvXYxvXyXwxpcEGGBBHuDI/OvrLBybaE7lQT9KXs0mTleJTdJawVHcuBRLEADqTA+poV/tVgdv7XYmYjxFmZjvSnMmXOL49bFp7jmAoJ+lfNHMF7E469cxDKxUk5AdlToAPzrunO9sXrahWDITrBkH6UnXLIQhFSi6c4JaHWkMM5nPuTuI3cJikdcyiYddYKneRX1Dg72ZFbuAa5Pwfg6X7gXKJDCdPmut2LeVQvYVpVtuEUur2PxPdy+FUs2wE1w3mz7U8Ubzphj4dtSQCVlmjrrsK7NxdZs3B/hP6V81cyMXxJAXaB5f40bA25gguTGXl37UMajE3n8VR0IAPxEV2/lzjaYuyt1Oo1B3B6g1874Hl/qTE10/7KybRazMrEihCwNxDPQyDdOmK1exUCnWplNCJw8gdTdC+N4rKuXvRG7cCiTSnxPFZ3JrM8U1Ps69g7P9IehMtmVLhohw86ULZqIYFtK8uojxhI1Ea3mrwTRRBgTy1Q3XA3rWKvhFLEwAJNcQ5o52v4l2FtzbtAwsaFh3Jp3SaR9Q2B1KO4UTsxxluYzifepJB2r51whvO0q7T3k10XlPGYxIQnxB2J1+tab+FgDCtzBrYTzidDFaK1HYdpyshUwDrV9CO1Dp8Hus97gSH1CrFLmDl7xbufL+ED9aynDxI6VlbS+FoBjJi/4g/CXAKwLXtErGWKxr9LZTyeoVXDTVZmrKju3AokkADelyeJYDJkHGBNlx3U0kWMCqlrzRmIAn0FOPEOJotvNIIbQdjNLroDbIMVpaep0GWHcYoOQRF/E8UCPlYGDs24oNxHChpJGaaKcM4XbDNclmyyApJKj2pb4j44xDAB4nyZBInsRTGMxgnaOZ74PywrXbbKDrcUZfc/ymu3c2cw2+H4Rr7icsKiDd3OirPQdz0ANAuQMIzKLtxApUEajXN3rnf2xcfbFYr+zW9beHGvrcYST8AgfWnE4WZV3v4ET+a+a8Rjrma83l1K2x/u0HoOpjqdf0oElxp3NEE4ax1ivJwTATG1QAB1KYMIcE4jcRhDECSdD8CukcL4j4hUncKCfnT+X1rlGEuwY7j+v69aeOVLhF1BPlJAYe5E/AED4q+xXEsljVnI6nZuWeEC2viFQGbX4o6wqth2ygDptXniPFbdn75/jXBccCVO6xpDxzErbsXGcwoUyfiuQcIwtslmABJ1mmrnPjtrFW2w4DBWGp2pQwVnwAFXUCqX1PtyBH9LprACWE828Jda9lJhZroXIvBTZe4xaZiPSkdcS2cMRCjc088oczYe4pRbgLg6jrQEO3zNO1QwuI4MamstNUGvzW1xgXek21dYuzniKBDtkPGsZAy0uM9S8QxOdifWqZavPauw22Fo7UAoxPZq/hNqHA0Qw50pdRxLmXFNYTUatWM1WAkRK+1biRt4MqDBuME+Dv+U1xMGuvfbBYLYa2QNrok9p0/jSAvK7QCpzGJivT+FbVo+pitqMzcQvyTw5iMxU5e56+1OHD7wt3AYIg79KtcAsgYZABBCgH3qvcwjyTn07R1pxsE5hkUquI9XMSrhT1AqImquCBZc6kZIAI6hhvrU3StKk5WZtww+JItyt1Cjz0rKLBQzjcfbs2zcuNCqJNIXHftJ6Ye3p+8+n0ApT4/wAwXcSxLmFnRBsPfuaAu9ZF1os8o6nu9B4BVSobUct9h/mHcVzpimJPikT0AGlV+Gcedr9v+03nayXGcFjHpI7TFLtw6kfNYRIigKiqc4jz1IQVRQPoJ1Xm7FzZU2x5UcMDIggVWHEc9sFdZHXakLg/EmRgGJZBoVJJEbGBRXD484e4UQG5YfzIRus/gPtTDn2nInmrNG2k97lT6/P4GWcdxcL+zBKdyNqu8ug3buVTJYyW7UJwvBbmJvquV1VjLGNAK6Dwvh1jCsUCnLGpO5+a4Ulh8IvZeinA5hvilvw8O6oSDkbzAwdt5rhXAMDcu3WJk5jLMdTJO5NdFu8xhX/sy3M4dWWWOqnWBPXtXm3hLdkBVEHQe5/nS1KvXuBkWabYRu9eYuYvli5pED1XQn3oLisN4flbXXrT3iMWQKVOKiTMUUvmSKhFk4Dz5gKa+UcKTcQHSSJ27jeg73CvSnLleyrXEJMA6+pjXT6flTVTZiN1e2davXMqluwpAxmP8ZmYtMyPb0rfOvNxUDD2jD3NM37o6n3pZxzrhbaeEc0kZgTJ9TTdZA5jOi/lkswhG1hszeoonZ4YCMxG1LPCuJFnZmBUUfPFoUhfqas2orUZJmrZYB0ZZ43hwbLAAbVzblNxZvuZCZCScxywJ9afsHxNFR7t24PDUSdp9h6+lch5j5jbEXGKqqIdAANSOmY9aC9iuoImXqbVOPiJ0/in2s2rTBLaZ4+83/r3pG4n9ouLuXS63Sq5coXoNILR3/ypKJrVJDTVBi23uJtYxnRcB9pbqEDpngHMdmY9DPT/ADpi4Fz/AGL7KjIbbHeSMo+TFcYFTWbhBBBgjtS9vhtD54wZZbmE+kVNELO1IPIHMQv2haY/tEA7+Zehk7mnyydK8zdQ1VhRvSOKwIyJYBrxevBRLEAUtcycXa2IVoNc94lxPFYpmRbhFsbzpJ7aV6Sv/Tm7Ti4v36Yme+vVGII4HrGb7RuY7ZsNZUhi3UdKB8lcXNxCpANxBHuKV7vBbpMNcUn5pi5Ywn9nZZMljBPvtTlOgNNRAHXMGviVRsUBu+I88Nu5RG1ax94KCYJ9t6q3WO4qK1iCcsofMYB6EjtQlBbgTVZ1QZY4EbeW76nDEBSpJ69auGqWAuLkULAjcDvVg3tYNatKFV5mRdYruSp4lRbhEgd6yosSWzHKNKyjQc5Ozt1HzUNw7g1cDAd6hxOFz7HKawBPrlqtt45g+2Zc/SrKLVZcM9sww+RtUyvVjEqDgeYcz09ozmUT39qv4DibW1KgBkbUg9+47VPwt0WzfdiJICKOuu8flQkGNqkAjBkEpaXrZeOufXjP/fnOm8s80YW1Yzu37U7rBkdgPSlXmrmI4i9mt5kTKBlnc9SYNLNxqgtN5oohsYriZ1Xh2mot3AZJ+PQ/SNPJ+JsW8Wj3kDaFVY65GbYx67TTRzGtwg5LYuAr93YyOoNc4tXIIPYg/INdQsYzxFRkI8wB+OtV3cYifimmVbPar69/UQFaW6ljNfEEdzJA7E9TS/fxqvOUOY3hZFNvNpzpkB0Ak0rYXhQC6Oyz+6d/cGo4zzMzzY4lzhuAS4hYyI17ERrUvBOLILrKR93TMNgTuB+lGF4M4whyMUdxCvAJ9zPSue4ctYZkuaOD5huZq+3Ah9Ald12H6EdsRw5rz54kTof4ii3BuDorZrgB99aWOFcxqCqNOU7j+IpgfjmGUDMGAOo3o1VaseOTA+I6a6gkjlPiP7xi4pgkdBlUT3ECgF7gjDXNPoTXuzzJgzC+JHyRU+J4hhBGuadBBkk0x+H/ADYmQNQVGAYgfacVtC3aQQGGdvcGF/jXOzTT9oWLW5i2yCFQBAJnbc/Un6UrEUE9zs55mqya1W6idMivS15FSKK6dDnKfFGsYhGB0kAjuDvXdrXE7WWQ4Psa+eOF2yXFNb4V1uOc5QFpHcyATHyTVF8Pp1NmbPQS3tHUYWPfF/Ae5nLAxuJoJiRbWRbjKddKGJjBaQ+UtMySJJopwZs9tGKgZhMdq0bL006BBkgcCJ6vw2zUYXOM8mCeJ4cwGrzhHLjKT21o3zhZFmwrjTMwX5/qaWMLeKwYmiJYr8jozEs01tOUfsHiNtq84XX6/wAaqXeMG9ibNtdFs6+7HT9J+tD7PF7jA2yoC9D1+KocNx3gvmNsuZ8xH5R3pSvT+zuDflmpfrzfo2rx58Y+sK8Ux7nEvlZlGYTBI2FdF4TiUvW0Pbr3il3huGQftsgzNr5hMDtFVuP8ZXD2c9sZSCQqjQZjufarWaoMSqjPMjR+F21hbCceXr9u40cR4nZtPle6qmJgkAxrWq+f8finvO1y4SzMdSf60FZU+3+Ud2RxNeFPWlz/AGgc6gLRvAW8Rdth1tP8I0fFZhqIn0arxrT3NtQ/vxGrBcGlAW1YifTXoK83uCYcAyNQJMaRVLhvMRtL4d9WUroD+L5B2qvxPjucNkWMyhSSZJ9dNjUEYmMKdS9pOT33mC7jKZy7A6TvFR56hwzRNbutGtRN0WeQGeblzzVq4NjUOGtvdvBEUsxmANz1r2zESDoRoQdwRuCO9WxExerkiT59fej3K+McOUXWQWA6yBJA9xOnpSxnr2l7XQn4MH6iuHBkXEWoUPr/AFjBieKm/cyoAxAM6xA65pOnzVO5zD4d1bahXI31lBHSRvSytwozyTPUyZPqe9eMJbgZurfkKIVXGZ5you1u0jruNPGefsZci2HVFH7iiQPQmaXWxBnOSWZjqSZJ+TUHhSZ7fxrdtJY+lcee4wilGO0YyeJKmJIbxGnTYCi1/j1xrQL2MqdHBM/Q70KW3LgfugGKPtc8a0bZXzdCNjoQR7x+lWUgGFNN19Ng3HA6H+4jvP8AaBbis4zDzDaRTFwLAtZtG7cEN+EHcAzJ9JGnyaF8lYY/tLmugULI8hJzEnsWECPf2oxjMWTbYn94T7bfzplR6zyGs1II9kg59Ys8dbPecxEmSO09KCuKauKcMe5iXKCQFVm9mzCfXVTQDH4Qodd+1CPZEaq81Yb5Sga1XoitAVEvNrUtpdK8Vdwdkt/P+NdOhDl7D5rgBGnX/UUdxdlv7Xfa5IFvKFUnoUUhvkEH5r3y/ZVRBOi7xvMQY+aNc54ZRbS4GkMhtFgIkp5l/Jo/5aLSRu5hK+HC/HOPqBmLF2+zPAY5e1OPBree0vTSkrh3mZDlJGgaN4609YLDsc3gZcnQM0EdxV9RVvTjvMK15Fqg9bZPi7IdQlzzKpkA9+9U7mGtj/41+lXrPCcQzjxCgTrlaT8aUXTgNo7lj8gUmuntPXH6yXtpPYz+kU/Bt/8A61+lTBFEQoH0ptXgVofgn3evVxMPa0ZbYP1on4az8zwYtpX3UH2gSzd00/Kudc/eIHWc2TXKTtP8668eN4ZeqfAmlnnLimFxFk23Vj1UgBcrDY1daFT80h9QWGMTjgrder9kgkQTWVEDO84L7OeHWLi3ck5TIDuzLPSQxg1PzVznZw6ZLKo10iBA8qD94/yrn55vOLzZ8T4A6CMxb66A0HvXZJJOY9zufWi3sa1GB3NPwjRrqLSbOl+89Yu+1xmuOczMZJPU1DaszrJ/nWKk6mpS0DSs45nslRcdcSG5bA1zRUN4EgQZ9qpJauX73hZoBPTtT9wblO2oHkk921P51JGJjWeJKWKheOu4hWrzJcVlJDKZBG9M/GMA+JtjF27bBzAuplOpGmdO42/qadsNwW2uoRQT2A/WvLvDFF0I6df86qwJIMQOoGcrOSXSVMMCD2Ig/Q1lp5aBvXWQiEO9wAKiEsSJKjeY36GqOEazftNc8OEA8vl8x7dKvzL/AIwg8zm+K4WzkHMoEa7mr2GwiKNRJ7mrQsvnICNHeIHtrRi3wZFVXusSWAZbaaEA9WYgx7Aa96hiwHPU0qm0lY9vjlvjzF42k2Kj9J9aisYFQ0gmTAjf6RTNiFwiLL2wB0zPcOvpBE1VPE7IUvatJM5UKq2YnrGYkncCurBfrqKarxbTVDdsyR10OYKwXAr3jNcuRaUyPMRmPaEGo2H3oo2oSyJ++/7zAAfC7fUmoMLhGY+JiG13FudvVo/SpMaRBCiIp4VKOZ4uzxjVHNavgEknHz+fcn5lsXLeQF86XED23EhSpA2B1XXvG3oQAjYrOjISM8b/ALw9fWrSX2uWxYLGBJtzsGOpUe8n596XL1h84Cg5p0HWfapORzAVKrkqOI98DdSC5/cVWPoNR9MxqDinDEeZAII0PT02q/y1wm5atZ70BmOXINcoIEZv8Xl2G3voBvELpts3hkGD5rbaSP3lP9fFJ28vkTb0a7aQrfOI/EOHshIy6Cqa2/Snn+12ro0ieqncfFDcTgVB0FcLfiIQ6cdgxb8P8qOcOwLuoFtGYnoNO43PufoK0lu3mho323/SnJMStjDvdAgqnlkQAzeVJ/5iD7A1O/MH7MDkmAOEXciwzak5nM6KBoSfXQ/r2NEv9o7N9LiOuWygC2rn4hcM+fLuwMfdkeVeh2TMRfJtsBtKj1O+p9PLRDgaZyqaeHaJu3D3MbfQQPVjTCMR1M24ZO8+nXy/5MmxuKvWSoGQqwzI6ghXWYO4BBB3B1HyCZBzZiVUKtu2AB2k/NEuMYG7j0ttbIi2HhACCcxWcp/Foq+UwdDGadAFzgwkDMwJ0PoevtRyXbMkXoFBbswnh+PY1xIC/T/OprXMGN/cX6f51d4hjbNnDBLdrzxCn9WNI9zEXv3mHzVNzekMSo7jrY5qxWYKbSHXaGGnvNWrqYy8S2UBSdFT8I96UOCYxg4Lmfc11vgV0sm6gQf0puhDZycftMnxDxI6XAVc5+c5899bZZS8tELrPm9ao3fHI1uD6D+NCuJ4hUvXFKywdpb1zHaoLuNu3BCho9AT+dJOxzNes5UGECD1vfp/KtVRw/CLzrmECe5g1ldtY+ktxBU/WmnA3HfIBacs0ADKdTsI71a4Ti7FjAk21V776ktlzJ08s9u1ecDzfdtlSiopEGQus95M61arS+2HYjem1z6ViU9e4yJyJxAgHwY93SfnWvQ+z3iB/wDjX5df50HxXOePY5xiWCzscpMeggU1cG5wW3aVruKBYzq5Ek+w6VWzSqnf2IMb/jepPw/Y/wCZRwn2a8RS4t1RaDDu4IPvpRu7iL2GYW76rngE5TKEHqp6/wCtEsHzraeP2tpp7MBP51vidlMUQw3Ay+UgiJJ6+9TXXTnzSlGsD2/zwMfL4wNieZAp1QbdD/MCh1/mS2TPhLPcmY/IxWcV4UoaM22h8uvzBqjcwdtBLPHqcqj85qGFOeI412jXr+8mvczPGmUdNAdZ/wCGh7cdvHYx7KP/ALVpsThACc4aP8Rb/wAaj/vXCqJAB/5f/c1OeOB9oM6/TL0v2E2eIXDHmMnrMf8AjVvmniQt37s6wcqj0QBR7DShbcxI0i3bYnoBlEn2WTUqWc1xr+IZTeY5sumVO2n736epob1mwjd1Edd4qu0YEBXMJiMQwcqYJ0LeVQPTNuPaabMHgktKqqVLARmMTrJMdtSao4l0OpJY95qi15ejMvzRRhep5y62y/viHbtxR+IH86GcSxYGg61TXPEqS466D9elRX1zLmG36H1rixMpXSAeZ6xN2Fkbnb09fiimBvBka8BF0QC43DrrPaGB103HqKCopYAAEn/MfxKD5opywrZ8RaZTIiVPQ6yD2MVUNzg9R1Kjt3r7w+/yhXDc8KtvwrtlpZlGdSMqwRrB1A30qxxLB2rpl4I36UExvAzluDQj7yHvG4PrUnAblwoFIzAGBOhIHQd+1KuhflZrU2bOHGM/GG8HwXDi0SigdQY1+tKOPwLMxIJ9JP8ACnY44eHkXX8MDcR3HSlvH4hZBjKVmSeu2m/v9aBlgY2yqVlPh+FuKwIRF9QuvxOx9aK8wWHvqmFtQWUG9cBYDzBSVUnvlzNrH3hNCmx1y6YtNlUaF4mD2XpNXuDEWWAkkHMrsdWOcEMx7nzE0zXWT5mmXrNUtY2J3E/iaPbbw2VkYCGVgQQQY2PsK9YI3gCqSFaAegMajUwDRDieIuvcyYi4C9s5QQuojTQk6g7/AENTJhk38x9SaJj4RdrRt8wkuBs4qyylvETNsV+63oHGk+g1psvYXx7asQwvJpmYEZwNldj17MfYwIhcwuOe3opMEQRupHYg6EVKtqy8lTcs3NwEulLZ9iQ2Q+h8sxqooinESbzMCeJS4kD4mUyCoggjUHqCDtVMif8ASjVmzddoIbEEDW3eXLiIH7lwTn01g9NgaK8PwOEuNa1YC5IB2gjdWHRgdI9u9XVwowYZ1Nr5GIq2MICR/Kuk8uWWtrGjKYInpUTcp2c0pfJHwYNGP7OLdrMtzOwEARoG6TTFWorTmZ2s8N1GowuQBOUfaPwNrGJa5li3dOYEbBuo/jVXhPMvg2gmTb21rpeMxdvFW1w/ErGRt1dJyT3BG1c65o5Lu4Yl7Z8Wz0ddwOzAfrSVjBmJE29PW1dYRjnHGZBc46pM5CPY1lL5etVXMNPFE+C8VNliRlkjdhmj4oatYavVaa3Dr2JDKCMGFbnE2ZmE/sy0lYEdzE7dYqW3bI8/lyHYMwB30kTM0HFS27WZlX95gPqQKv7c85HcjbHHlfgl6/aDgQuY5QzwGHU5ToQO9RtjUwV5hbuFbgPmZYZDsY8tF+O8SNnDi3b0mEWOgAikjGYSFLEyf40Fn9IxTp3sBZehDnFudb91mIKLoPMsmTHQNsT26UDw63bpLKfEYAkz5jHX72gqiLNXOG4lredFMC4pVj1KyCRPTb9a5GAOZRqmx1LRxrLYK/sytwDTdlI1kCRkM9YodgbDXXCLue+oA6k+lZjbgJABmmvlXCBbAf8AFcJJ7wpKge2hPzRNzOe4tqLBSm7Elt4W3ZXTQfiY6Fvcjp6bUPwdrxXLKXKTvoqj0Eak+1QcVZr1/wAPZQdfYbmmHD2oAVRCgfHtVgNxmazFFyTlj9oOvYJQwyC4SezxPqZG1axYFuALfiN1JEqPQaCfmizXAKoYnGha4gCUR2aQYZLuIOVQTHQDQajpt/qKdOG8lWgv7SSxEMAY9d9yZ6+9BOTsS7YjTaBI6Aa9P510FrkVatAeY+i4XGIm8a4bhsOVw+HBW/fIBbOzMlpSWdhJOUkEqCIPmParxtpYthFUAEdIke/X5pXuXCvGHa6TDaITtlyjKB9CPemTiWMBIgSBv3jrHqN460lqCSZq6VQFzMtOiH9oJtXIKsPwsQP+06ex96pcVTKua0AoTNmELIAls0HSNTNSXroRSDDWzr3An8Snt3Hz71fEBw+KBBJW2wGWCcjDyE6zCtp10FCQsDkRhwpGGgZMWHceI7amCdt9O1XsHy3bv7XXC9S0ad4gCTS89i7lDLZuFQQM2U5Z3iSInSj+COJyxatO06SYCr9SJ9qYrOexmJ3MegeIbv2sKijDIoVYJnrIB8wO5bQ/Wgr4eQre0++k008H5BS7luXsTe8TfKMiKD2Ayn9aY7nJFjJ9+4IBMrkzMe0ZYO1N445mTqKndhsnGeacPqtzUPGVweoH3W9dNJ9qp4DFGINdbxHK6LaKZnUk5sxgkbgCNARB1AHU67UFHKd5h5Qh9btp7Q+pQj86XJAOZYJZsCkZ/WJoeakVqccPyOzjzNZB1kW5YA6wMwIG3aYodzDwvCoVWzbvqyhvEcZzbMayouCdACSdF7VKure7BtSwGWGICsYp7bBkYrB0jvTbhPCxttiBkxKkXNBGd16gfvMJH07CFRbKdLv/AFL/ACNEuBW2t3ldLitqNpogGeIAtt8w7EJ+MbYkMST9SavcM43cXy3FBU76SfmlnGcWQ37pGwuOq+wYjT6URw+LBFKMxBnpKq1ZcmNdrCrdQi0wfsj7qewPaoOX76i61lgQ2z2m2B7jpr6Uu4binhXQc0Cs5t4mTibV62YYprHWNv41O7jMk0c4Eq89chE4oth7bKjKGIVZGYkzHbYVlMFjnl1VQYJjrWVbIgvYmcTCHtW/CPaiviWo/wB28++lQNc7W/qa7MHgSkUI3qxws/trf/Gv61rEOY2A9q3w1f2ls/4gfzqRKmNHHWk2/eht1pBBE1f4gZZPY0PB1oT9zc8KP8th85RuEDZagYT0NXrtwVWZ/ipBkXooOM/aG0wuHCqcjIDqGGoj3Ox20mjDTkQWzpG+22hH1BpPXEXF0UkT03HyDpR7AY7Lac3WiCuijXzGCRr00NPiwMvK4M85rKCwwhzjmT/2EB87MB3jcn+FWRii+i7D/WhlpLLNmN/P1hmAj40q6+NtKPvqB7/wqgma6HrBJ+kjxNpjVe1wmdW/OvL8aUmFDH12H1Nau4u8QSqCBuc23vAqwrJG4DiECWjjqMvLGOs4ZnUwuYCCAAPLPb/i/Kq3E+di9zw8PB/xHb470mXbd1z5iAJ/CJ/WrC8L8Moy3CwnWUy5ddNZIM+9Vy+MAR2lAq4JzOmYPgdvE2EfEWLt19Y/a27cCfwtkzAfOtFLfDQmq8PDf/0xTP8A9pTKfkVb4BxRWtLHYdfbtNFVxy9j9JH5VY1g8mFDkdQCnLdq6G8TBrbnYJfu5YO+i5QvwKsYDlizZhktKpGmhd9PU3GJ/Si/95IP3j/woT+lelxYYhctzXqUZR9SIoB9gDyw/eX3uYBxWPYOyCIUjQAaaAx6iqxx1yddPy/nVzjikXWAByQGBB07HTYdBQa/jLanKz5WiSswY7kRoKHYBnEkHjMsf3s2sNHTcH+FW+FcdbPkcmNSGk6GNtAB3iev5A7eNw2kXA07asf0FX7OOtagZiehVWidN9No7VTaD0ZOYafiK+YEM4jTNJBPTTcRVe9jXcyQjRvILHT3PvVDGYgW1DPbuENoIRjr6mIHzQ7+/wBFJgBCNszoNwe0kH3FX/Dh+xn6yu/HUZrfEb8QrZPVV19pYwBWrj3XIzXbn/WAPoKVE5yt5v2uQD/AWdvzRRXi/wA/4dR5Ec/9C/8AtFHFLdYkbhLnMHJy4m94ssmZcrOvhkZ1J81xWdWaQV1E6D0rxy7yK9q7nuXJAkKbehEjR5uDLIMGIO3WhV77R2Ii3YVT3Ja4x9th+VV35zx7AFSF9EVAfmRRlpA5JEA67vSMmO+yOyBNrE3U6/tfDdT8rlInvrULcjYq0n7MJeHTI0H00cCfgmltuaeJXJDYwpA1HiC2f+wAdaq/3y1tldsRde5JOZLrMw+Sdfrr6UNqqj20ZSyxOpQ4viSHKmVZSQwIIIIMEEHYg9KqjibXLmYnQCB7CvPMHEGxOIuX2UKbhkgegCyT3MSfUmqdoRSu0Q/tDnMsYvFHNv0rdDLzSTW6nEGbDmFbWDLIlwNKs+VvQ/1+tGrHCrI0YT6k0HsHJbVZ0FyfT3q//fIJIVJirjEHPXHsJbWw0KBtB670s4Ik3E7Zh+tEuIYi7dkFdO1DLLw6g6HMP1riczox4u5BB9G/Q0NQyAak4u/lHzVBLkiCdCKGVzHdJqBVnM84nEdBW8Gsz1NR27MmrWEhQddaIiwNtrWNlpZvAKF/rtUeMeZ+PYVDeu54HUbV7toSjKfvDb19KN7w/b/yCJlXLXlljYxXraoydaoZSSJiioiJH0P5UzYngF+2QAGllBhZJiJ1y9tfaDQXl0IcVY8T7niKSImY1A9piuk8S4ooD3H27AxmI1gnqBoPj0q6Wsg4MgjMS3vXVCkgPp+IT+e595r0MWhMurWj0IzFdR6EMJ+auHh93EL/AGq8YQzkVdIUSJgbL2HXf3q4bhRukgN0J/L+ulMLqCffXP2MoVWGuDY9fwNa8SYhs0t7EmZ9INMeCxoJPiAWyoklmgATEzA0JIE9zXKcRmDRAEHWZmfrtV/FcSu3EVH+4I1UAEmCBn08x1O9Q11OPLnM4IZ0ZubMMB/vS3oRP/lB+PWqSc8Ya2ZFto6m2ApIidgfN7Vz11KiVJAHUafJivNpmcZi0gaSTJ1nvPp160FrKmGCuZYKR6zs+LWw+pZ4j73iZdDB0PT60Nu3OF2zDeEW7NdLsdokBpOhHSufYlQoQLZBJAbNrJANzMDMjqhmNMm2s0Zw5DW1MhSiqoIAA0mNIMsc2g7xvGgQBngfaE2nHMYn5pwiD9lh5/4bESekNdyzt0rxxDm3EpYuYhMMqW7eXNmcBvOwVfJbWCJI/FVO/wANN3KysVGjEKqxlEgaZjEiJ3G9GOOYYDhmKEAA2WPysMv5iiYg8xAxXMeJx48O5ehZzeGlvtsxYmep6/FUMXwzw0l87MTAOiqB6jUk/Iq7yvibVgHMwzt+VEOYsWpa0Jkat/Kl/bWbwo6hgggzBcMthWYpmI7lv0miHCsNayT4SAjrlWat8KMWtR94zUXCwSzgA6H4q97ZYqD1OxieOJWgEbbagfDT+zYzsaauIcJd7ZKxoDInWlThZOUqdqEFnQfcuyaurwp8geJnp1ij/BeX7d5xp8VaxH7K61i4CpU+WdMy6RHejLXxkyQc9RWfhdwJ4rIwQmAY3PageIvkkjYV33hdq3i8K2HaAY09D0Ncd47yxfsYhkvrl1OVgPK47j+VS1eBkSm8k8wVg28vzWURt8LgaTWVSdLHHcELChAZ60IwmPydK3WUOskqCZxhXC8VX92RsaP4PhQuWswVGJMgMBPpDdDWVlVvcquRJXuKvEto9SKp43CskKwg+46+1ZWUQGcBxKouEHQ1IIbbQ1lZVhIlrCJvPSpsScpDCt1lF/xJPu5g5mrXWsrKpKwryuP/AMlNBoGP0U7etHuYLhKIkxm6+rf61lZVWnCOOEtoyhbXlAAVkMkARClZ9hSdeY2rha3tqCD1B3rKym7eAMQKcmD7ttLhlZBPQ6/nV3h+EjcAjqDqCKyspbvmFPEL2+Wi4ZrRDWysG22jCf8AEQQw36A+tKF7APaeGUSDJXSYB6EHLtFZWVzIO5yseoTXFkoMqDw01Jd2k66gRML12J2rVzBX2vg2siITMEllMk7jKP613JrdZXBiZ2I48F4XcV1uvcBKgrltrlQiOuYktt3FBedOMuWNnN0UFRIVUkMAT+J2hZOwGnU1lZV3JxmVTuI5wzF59aa+B8Uti7lu2wU0WYlh7VqsoaHDgxmk4cTo+Nt2TZm2oOmgIiKVcXbdN4E6wKysouq96NasefEC8SxT5WUNEjWgOCeCo71lZSymJGdH5ItRcUmmbnfhNp7Nxrig+WVP4lMaEHpWVlPV8JDaRiLCPiJxnBc0YrCXPKwMfvdR8U6WedU4jaNq9ay3VEoRqJ7z0rKygIxziK2D1gN78Eg6RWVlZVJ0/9k=" alt="Quality Education Image 2" className="education-image-2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsSmqF2604BjhgSI0sjjLXM859MLp3a7bKA&s" alt="Quality Education Image 3" className="education-image-3" />
        </div>
      </div>
    </div>

    <div className="quality-section-xyz">
      <div className="container-img">
        <div className="text-container">
          <p className="paragraph">
            At our platform, we are committed to providing quality education to everyone, regardless of their background or financial status. We believe that education is a fundamental right and should be accessible to all. With our comprehensive resources and experienced educators, we strive to empower learners and create a brighter future for generations to come.
          </p>
        </div>
        <div className="image-container">
          <img src="data:image/png;base64,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" alt="Quality Education Image 1" className="education-image" />
        </div>
      </div>
      <div className="container-img">
        <div className="image-container">
          <img src="data:image/png;base64,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" alt="Quality Education Image 2" className="education-image" />
        </div>
        <div className="text-container">
          <p className="paragraph">
            In developing countries, access to quality and free education is crucial for achieving Sustainable Development Goal 4 (SDG 4), which aims to ensure inclusive and equitable quality education for all. However, many barriers such as poverty, gender inequality, and lack of infrastructure hinder this goal. By providing quality education, we contribute to breaking these barriers and fostering a more sustainable and prosperous future.
          </p>
        </div>
      </div>
      <div className="container-img">
        <div className="text-container">
          <p className="paragraph">
            Quality education is not just about acquiring knowledge; it's about developing critical thinking, problem-solving skills, and fostering creativity. By investing in education, we empower individuals to reach their full potential and contribute meaningfully to society. Together, we can bridge the education gap and build a more inclusive and sustainable world for all.
          </p>
        </div>
        <div className="image-container">
          <img src="data:image/png;base64,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" alt="Quality Education Image 3" className="education-image" />
        </div>
      </div>
    </div>
    


      <p class="paragraph">Join us at Link2Learn and embark on a journey towards academic excellence and personal growth. With our experienced faculty, comprehensive curriculum, and innovative learning platform, we are here to support you every step of the way. Together, let's build a brighter future where quality education is accessible to all.</p>
      <section class="about">
        <div class="container">
          <h2 className="container">Empowering Learners Everywhere</h2>
          <p>
            At Link2Learn, we are committed to revolutionizing education
            accessibility by bridging gaps and empowering learners of all
            backgrounds. With a focus on Sustainable Development Goal 4 (SDG 4),
            we strive to make quality education accessible to every student,
            regardless of their location or socioeconomic status. Through our
            online classes and offline centers, we aim to create a learning
            environment that fosters growth, creativity, and success.
          </p>
        </div>
      </section>

      <section class="commitment">
        <div class="container">
          <h2 className="container">Our Commitment to Excellence</h2>
          <p>
            Link2Learn stands out for its personalized and affordable learning
            solutions, offering a wide range of courses tailored to meet the
            unique needs of every student. Our extensive learning material,
            interactive teaching methods, and technology-driven approach ensure
            that students receive a holistic education experience. Whether it's
            preparing for board exams, competitive entrance exams, or enhancing
            core skills, Link2Learn is dedicated to helping students achieve
            their academic goals and unlock their full potential.
          </p>
        </div>
      </section>
      
      
    
    <section class="join">
        <div class="container">
          <h2>Join Link2Learn Today</h2>
          <p>
            Join us at Link2Learn and embark on a journey towards academic
            excellence and personal growth. With our experienced faculty,
            comprehensive curriculum, and innovative learning platform, we are
            here to support you every step of the way. Together, let's build a
            brighter future where quality education is accessible to all.
          </p>
        </div>
      </section>

      <CustomFooter />
    </div>
  );
}

export default HomePage;
