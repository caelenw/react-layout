import React from 'react';
import '../css/About.css';

const About = () => {
    return (
        <section className="home-bb">
            <div id="hold">
                <div id="bwg">
                    <div id="inner-bwg">
                        <h2 id="dark">Budget Within Goal:</h2>
                    </div>
                    <div id="inner-bwg2">
                        <p id="dark">The goal at Budget Within is to guide and inform our users on their spending while providing visual demonstrations of where every penny is going. We strive to create an easy-to-use platform that empowers individuals to take control of their finances. With our comprehensive yearly graphs, users can easily track their financial progress over time, identify trends, and make informed adjustments to their budgets.</p>
                    </div>
                </div>
                <div id="bwg">
                    <div id="inner-bwg">
                        <h2 id="dark">Mission Statement:</h2>
                    </div>
                    <div id="inner-bwg2">
                        <p id="dark">Our mission is to empower individuals to take charge of their financial well-being by providing intuitive tools and insightful visualizations. We strive to cultivate a deeper understanding of personal finance through easy-to-use features that simplify budgeting and spending analysis. Together, we can transform financial management into a rewarding journey.</p>
                    </div>
                </div>

                <div id="bwg1">
                    <div id="mtt">
                        <h2 id="dark">Meet The Team</h2>
                    </div>
                    <div id="mtt-content">
                        <div className="home-section" id="p-1">
                            <h3 id="dark">Josh</h3>
                            <img src="images/images (4).jpeg" alt="Josh"/>
                            <p id="dark">I’m dedicated to helping individuals navigate their financial journeys at Budget Within. I believe that understanding your finances is key to achieving your goals, and I focus on creating intuitive tools that empower our users to visualize their spending and make informed decisions.</p>
                        </div>
                        <div className="home-section" id="p-2">
                            <h3 id="dark">Kyle</h3>
                            <img src="images/images (3).jpeg" alt="Kyle"/>
                            <p id="dark">As a finance enthusiast at Budget Within, I’m dedicated to helping people understand and manage their money better. My background in financial planning allows me to provide valuable insights that simplify budgeting and empower users to reach their financial goals.</p>
                        </div>
                        <div className="home-section" id="p-3">
                            <h3 id="dark">Craig</h3>
                            <img src="images/images (2).jpeg" alt="Craig"/>
                            <p id="dark">I’m thrilled to be part of the Budget Within team, where I focus on creating user-friendly features that make financial management easier for everyone. With a background in software development and a keen interest in personal finance, I’m passionate about building tools that empower users to take charge of their spending.</p>
                        </div>
                        <div className="home-section" id="p-4">
                            <h3 id="dark">Katie</h3>
                            <img src="images/images (1).jpeg" alt="Katie"/>
                            <p id="dark">I’m excited to be part of the Budget Within team, where my focus is on enhancing user experience and ensuring that our platform is intuitive and engaging. With a background in user experience design, I’m passionate about creating seamless interactions that empower users to manage their finances with ease.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;