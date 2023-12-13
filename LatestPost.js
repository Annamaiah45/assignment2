import React, { Component } from 'react'

export default class LatestPost extends Component {
    render() {
        return (
            <div>
                <main>
                <section id="trending-post">
                    <h1>Latest Posts</h1><br></br>
                    
                    <img className="mine" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII='></img>
                    <p id="categories-container">Filter by Category</p><br></br>
                    <span className="filter-text all">All</span>
                    <span className="filter-text">Artificial Intelligence</span>
                    <span className="filter-text">Cloud Computing</span>
                    <span className="filter-text">DevOps</span>
                    <span className="filter-text">Programming Languages</span>
                    <span className="filter-text">Mobile Application Development</span>
                    <span className="filter-text">Technology and Tools</span>
                    <span className="filter-text">Get a Job in Tech Company</span>
                    <span className="filter-text">Others</span>
                </section>
                <article className="items">
                    <a href="#">
                    <img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Introducing <br></br>you all to <br></br>Edyoda</h3>
                        <div className="author-date-section">
                            <span className="item-author">Arman Ahmed</span>
                            <span className="item-date">05 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of...<br/></p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Amazon Web Services (AWS) Cloud Day...</h3>
                        <div className="author-date-section">
                            <span className="item-author">Kalyan Mahalingam</span>
                            <span className="item-date">05 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">It was indeed a hectic day with back to back session sandwitched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels...</p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/1_G1i7GlRPMGboYZdRhOeWaw.png" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Building the University for 21st Century...</h3>
                        <div className="author-date-section">
                            <span className="item-author">Arman Ahmed</span>
                            <span className="item-date">20 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">The google analytics dashboard was firing up, the whole team, each one of us was on the edges - half elated, half anxious and a little worried. And it happened...</p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#"><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">What is Income Share Agreement?</h3>
                        <div className="author-date-section">
                            <span className="item-author">Edyoda</span>
                            <span className="item-date">14 Oct 2019</span>
                        </div>
                    
                    <p className="item-description">The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman...<br/><br/></p>
                    </div></a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/EdYoda_Admission_Test_Image.png" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Your Guide to Edyoda Admission Test</h3>
                        <div className="author-date-section">
                            <span className="item-author">Edyoda</span>
                            <span className="item-date">3 Feb 2020</span>
                        </div>
                    <p className="item-description">All about Edyoda admissions test and how to avail the scholarships upto INR 2,50,000...<br/><br/><br/><br/></p>
                    </div>
                    </a>
                </article>
                <article className="items">
                    <a href="#" ><img className="item-image" src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="edyoda image"/>
                    <div className="item-text-section">
                    <h3 className="item-title">Fresh Graduate or IT Professional looking for...</h3>
                        <div className="author-date-section">
                            <span className="item-author">Arman Ahmed</span>
                            <span className="item-date">05 Jul 2019</span>
                        </div>
                    
                    <p className="item-description">If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The zekeLabs gave me a unique opportunity...</p>
                    </div></a>
                </article>
            </main>
            </div>
        )
    }
}
