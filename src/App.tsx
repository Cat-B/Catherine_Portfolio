import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowLeft, ChevronLeft, ChevronRight, GraduationCap, MapPin, FileText, Briefcase, Calendar, Building } from 'lucide-react';

// Professional Experience Data
const experienceData = [
  {
    id: 1,
    title: "Research & Development Intern",
    company: "The Applied Research Laboratory at Penn State",
    location: "State College, PA",
    duration: "October 2025 - Present",
    description: "As an R&D Engineering Intern I learned FPV drone fabrication and operation with preparation for FAA Part 107 certification, was selected as a Pipeline Student, and hold an active security clearance",
  },
  {
    id: 2,
    title: "Mechanical Engineering Intern",
    company: "Communications & Power Industries",
    location: "State College, PA",
    duration: "Summer 2025",
    description: "In this role, I designed components for manufacturability, supported satellite systems, and integrated mechanical and electronic knowledge. My work included SolidWorks modeling and simulation, detailed documentation, and backend tasks like BOM management and documentation.",
  },
  {
    id: 3,
    title: "Student Trainee",
    company: "The Naval Undersea Warfare Center (NUWC)",
    location: "Newport, RI",
    duration: "Summer 2024",
    description: "In this role, I updated legacy designs into detailed 3D models and drawings, developed and critiqued assembly guides for technician use, and collaborated with electrical engineers to deliver cross-disciplinary solutions.",
  },
    {
    id: 4,
    title: "Drone Crew Member",
    company: "Sky Elements Drone Shows",
    location: "Dallas, TX",
    duration: "April 2021 - January 2023",
    description: "As a drone crew member, I maintained and prepared UAVs for live shows, ensured safe operation of hazardous equipment, and arranged preparatory formations—an experience that sparked my passion for drone technology..",
  },
      {
    id: 5,
    title: "Pyrotechnic Assistant",
    company: "Flambeaux Fireworks",
    location: "Texas",
    duration: "2018-2020",
    description: "Assisted in wiring and setting up professional fireworks displays using COBRA modules and e-fuses, while following fire safety protocols and hands-on training to ensure safe and successful shows.",
  },
];

// Projects Gallery Component
function ProjectsGallery() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort projects in reverse order by ID (newest first)
  const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </header>

      {/* Projects Gallery Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive collection of my engineering projects, showcasing various skills 
            in mechanical design, creative problem solving, and technical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-blue-600 mb-3">{project.date}</p>
                <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                  <span className="mr-2">View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Project data
const projectsData = [
  {
    id: 5,
    title: "Gingerbread Greenhouse Dream",
    date: "Fall 2022",
    shortDescription: "Designed and built a complex edible greenhouse with sloped roofs, gelatin windows, and integrated lights with christmas themed interior.",
    image: "https://i.imgur.com/ZV8Iv8Y.jpeg",
    tech: ["Architectural Design", "Food Engineering", "Passion Project", "Project Planning"],
    overview: "For a high school creative engineering challenge, I designed and constructed a fully edible, architecturally complex gingerbread greenhouse. The structure featured sloped roofs, a small entry hall with swinging double doors, integrated lighting beneath a 'tiled' floor, and window panels made of gelatin sheets to create a realistic greenhouse effect. I am extremly proud of the results and used this project as a great chance to show off how I can work with limiting materials.",
    mainBody: [ "In my senior year of high school, I challenged myself to build an architecturally ambitious gingerbread structure. Inspired by greenhouse design, the final build featured sloped roofs, gelatin sheet windows, and a fully edible entry hall with swinging double doors.",
        "To make the project work, I relied on careful geometric planning. The intersection of angled rooflines required advanced 3D visualization and some hand-calculated trigonometry. I sketched ideas, tested with paper templates, and created a scaled cardboard mockup before baking.",
        "Structurally, the greenhouse walls acted more like frames than solid panels, which introduced challenges in maintaining stability. I experimented with icing formulations to ensure strong adhesion between gelatin windows and gingerbread without sacrificing edibility.",
        "I installed a patterned peppermint \"tile\" floor and embedded fairy lights beneath it, using frosting as grout. When lit, the floor glowed between tiles for a blinking effect. The interior was fully decorated, complete with an ice cream cone tree and small wrapped \"gifts.\"",
        "Though it began as a seasonal build, the final structure held together beautifully and became a winter centerpiece for months. It was both a creative and engineering-driven project that pushed my skills in planning, structural logic, and decorative design."]
    ,
    outcomes: "The purpose of this project was mainly fun, while I did learn some new geometry to calculate the roof shape, the overall project was mostly creative/art rather than engineering/calculation based. This project and other physical projects I have done have strengthened my spatial reasoning skills, and ultimately made me a more skilled designer when I learned CAD at a higher level. Not every project has to be extremely productive, but I am so happy I made this.",
    gallery: [
      "https://i.imgur.com/nyAAhUl.jpeg",
      "https://i.imgur.com/0j5ndnl.jpeg",
      "https://i.imgur.com/LqrKlB0.jpeg",
      "https://i.imgur.com/PmqSBN0.jpeg",
      "https://i.imgur.com/42AiL9D.jpeg",
      "https://i.imgur.com/6ANpE0C.jpeg"
    ]
  },
  {
    id: 35,
    title: "EE210 Karaoke Machine",
    date: "Summer 2025",
    shortDescription: "Designed, prototyped, and soldered a five‑block op‑amp karaoke machine with tone, volume, and LED display.",
    image: "https://i.imgur.com/XWU0mm3.jpeg",
    tech: ["Soldering", "PCB Assembly", "Mechatronics", "Op-Amps","Circuit Design"],
    overview: "In my EE210 Circuits and Devices course, I worked on a semester-long project that brought together the key concepts we learned throughout the class. The goal was to design and build a working karaoke machine by applying fundamentals like op-amps, resistors, capacitors, potentiometers, LEDs, and switches. This was one of my first major hands-on experiences with electronics, and it gave me a chance to see how classroom theory connects to real-world applications.",
    mainBody: "The circuit design was divided into five main parts: a mixer for combining microphone and music signals, a tone control stage for treble and bass adjustments, a volume control stage, a volume display using LEDs that responded to loudness, and an output driver with attenuation. I began the process by sketching the blocks on paper, then recreated the design in Multisim to simulate the system and troubleshoot potential issues. Once the simulation was complete, I tested the circuit on a breadboard to confirm that it worked before finally moving to a PCB. On the PCB, I soldered all the components and built a semi-functional karaoke machine that could play music with or without vocals and adjust the tone and volume in real time."
    ,
    outcomes: "This project pushed me out of my comfort zone, since I started the class with very little electrical knowledge. Along the way, I learned how to work with op-amps in different configurations, how to approach problems methodically through simulation and testing, and how to solder and assemble a functional PCB. While the final result was not perfect, it gave me confidence in my ability to learn new technical skills, and it reinforced my interest in exploring the electrical side of my Mechatronics minor. Overall, I walked away with a stronger foundation in circuit design and an appreciation for the problem-solving process that comes with building hardware.",
    gallery: [
      "https://i.imgur.com/Q3VF4Hy.jpeg",
      "https://i.imgur.com/QDXGVsu.jpeg",
      "https://i.imgur.com/XWU0mm3.jpeg",
      "https://i.imgur.com/Z0wNYsV.jpeg",
      "https://i.imgur.com/Nm1VEUC.jpeg"
    ],
    pdfUrl: "/karaoke_final.pdf"
  },
  {
    id: 25,
    title: "ASME Hovercraft Project",
    date: "Spring 2025",
    shortDescription: "Contributed to a winning team hovercraft through fabrication, design file management, and final competition prep.",
    image: "https://i.imgur.com/1ChHnxY.jpeg",
    tech: ["Fusion360","Team Work","Organization","Fabrication"],
    overview: "Through Penn State's ASME (American Society of Mechanical Engineers) club, I contributed to a team project focused on designing and competing with a small hovercraft. The challenge involved three teams each building a shoebox-sized hovercraft from scratch, with a competition taking place in March 2025. I joined the project in the spring semester after much of the core design work was completed, which gave me the opportunity to support the team through final iterations and preparation for the event..",
    mainBody: [ "The hovercraft, named Driftstorm, pulled inspiration from fan boat acceleration structures. It featured two fan systems: one directed downward to inflate a skirt of nylon fabric that allowed the craft to hover above the floor, and another pointed backward to generate forward thrust. Steering was achieved by adjusting blades behind the rear fan, and the system was powered by lithium batteries. The skirt was a key component in ensuring the hovercraft could glide smoothly and maintain stability during operation.",
        "My contributions included fabricating a new skirt using the Penn State Learning Factory's laser cutter, which provided precise cuts in the nylon material. I also helped reorganize the Fusion 360 project files, streamlining them so only current versions of the design were accessible while removing outdated or obsolete parts. Beyond those specific tasks, I supported the team by taking on smaller jobs as needed to keep the project moving.",
        "The team consisted of around sixteen members, which required a significant amount of coordination and logistics to keep the work on track. While I wasn't one of the primary contributors to the early design, I played a role in the final stages leading up to the competition. In the end, our team's hovercraft performed well and Team Driftstorm won the event, which was highlighted on Penn State's LinkedIn profile."]
    ,
    outcomes: "This project gave me exposure to a collaborative engineering environment outside the classroom, where the dynamics of teamwork, iteration, and rapid problem-solving were front and center. I gained hands-on experience with fabrication tools like the laser cutter and saw firsthand how small adjustments (such as tweaking a skirt design) can make a significant impact on performance. Working with this group was truly incredible and was part of my inspiration to join leadership within ASME. Overall, the experience reinforced the importance of contributing wherever possible, even in a supporting role, and showed me how rewarding it can be to be part of a large, successful engineering team. I believe ASME at Penn State is an incredible organization, and I can't wait to contribute as a leader and a team member to future projects.",
    gallery: [
      "https://i.imgur.com/TEG8q4q.jpeg",
      "https://i.imgur.com/ER0IhCb.jpeg",
      "https://i.imgur.com/7jL8A6j.jpeg",
      "https://i.imgur.com/jK08w1d.jpeg",
      "https://i.imgur.com/2dUJ3GT.jpeg"
    ],
  },
  {
    id: 20,
    /*remember to change the gallery number too line 500ish */
    title: "ELSA-d LEO Engineering Presentation",
    date: "Fall 2024",
    shortDescription: "Presented a professional, research‑driven talk on ELSA‑d satellite retrieval and the orbital debris problem.",
    image: "https://imgs.search.brave.com/XWEwsoNsTsJqDA8EL5ulT0evB4iSTLccx-GCn9W-CD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZW9wb3J0YWwub3Jn/L2FwaS9jbXMvZG9j/dW1lbnRzL2QvZW9w/b3J0YWwvZWxzYS1k/X2F1dG8yLWpwZWc",
    tech: ["Academic Research", "Public Speaking", "Professional Communication","Technical Presentation","Aerospace Engineering"],
    overview: "In a technical speech class at Penn State, I completed a semester-long project that culminated in a single, intensive speech of approximately twelve minutes. The project challenged me to conduct high-level engineering research and synthesize complex information into a clear and engaging presentation. The speech focused on the ELSA-d (End-of-Life Service by Astroscale Demonstration) mission and the broader challenges of space pollution, a growing concern as we approach critical limits in orbital debris.",
    mainBody: [ "Preparing this speech was a rigorous process that demanded extensive research, careful source evaluation, and meticulous organization. I had to hunt for academic and engineering sources, ensuring that every point I made was accurate, well-supported, and relevant to the broader context of space sustainability. This required more effort than typical course projects, as I needed to translate highly technical material into language that could be understood and appreciated by a general engineering audience.",
        "The speech itself was very intense, as it required sustained focus for twelve minutes, memorizing key statistics and facts for precise, accurate delivery, and strict timing to ensure clarity and impact. I practiced repeatedly, refining my timing, pacing, and slides to maximize comprehension and engagement. The culmination of this work was my nomination as a semifinalist in the Penn State College of Engineering Speech Competition, an honor that recognized me for my hard work and natural talents speaking publicly.Though I did not advance into the next stage where I would have given my talk to hundreds of engineering students, I am very proud of myself for how far I went. This recognition reflected both the technical depth of my research and my ability to communicate complex ideas effectively.",
        "I find this style of communication and presentation comes naturally, and after this project I have continued to hone my skills speaking in public and talking to larger groups of people. In the field of engineering soft skills are often harder to learn; Being an engineer with high level communication skills is a valuable skill combination I want to maintain."]
    ,
    outcomes: "This project taught me how to tackle challenging technical material and present it in a compelling way, emphasizing clarity without sacrificing depth. I gained experience in academic research, public speaking, and time management under high-pressure conditions. More broadly, I learned the value of persistence and preparation when faced with a demanding task, and I gained confidence in my ability to communicate sophisticated engineering topics to large audiences. Though it may have been tempting to research at a surface level or use less credible sources, diving incredibly deep allowed me to become a pseudo-expert on this topic. Hard work truly does pay off, and everyone who heard my speech was able to recognize the amount of background I invested. The experience reinforced the importance of combining technical expertise with strong communication skills, an essential competency for any engineer.",
    gallery: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    pdfUrl: "/elsa-d-presentation.pdf"
  },
  {
    id: 15,
    title: "3D Printed Penny Boats",
    date: "Fall 2023/24",
    shortDescription: "Designed and 3D printed two competition-winning penny boats that balanced buoyancy, creativity, and sustainability while doubling as everyday organizers.",
    image: "https://i.imgur.com/tUHkEFq.jpeg",
    tech: ["SolidWorks","3D Printing","Sustainable Design","Artistic Flair","Rapid Prototyping"],
    overview: "Through Penn State's 3D Printing Club, I participated in the annual Penny Boat competition during both my freshman and sophomore years. The challenge was to design and 3D print a small boat that could hold as many pennies as possible before sinking and staying within strict competition rules. These projects gave me the chance to combine creativity, engineering problem-solving, and practical design considerations while also thinking about sustainability and long-term use.",
    mainBody: ["During my freshman year, I designed the Queen Bee Barge, a honeycomb-inspired boat that featured hexagonal cells resembling a beehive. This design not only gave the boat strength and structure but also required no supports during printing, making it material efficient and easier to process. The design was a success, and my boat won the competition. Afterward, I repurposed it into an organizer, with each honeycomb cell holding small bathroom and makeup items.",
              "In my sophomore year, I designed the Bathtub Boat, inspired by antique clawfoot tubs. I incorporated small sections into the design so that after the competition, the boat could continue serving as a functional organizer. This focus on reuse was intentional, I wanted my design to avoid being a single-use item, given how much plastic waste is generated by projects like these. Both boats continue to serve as everyday organizers, which I see as just as important as their performance in the competition.",
              "From a technical perspective, I considered weight distribution and buoyancy in both designs. I placed pennies evenly across the hull and used an infill pattern that maximized air pockets without sacrificing too much structural strength, allowing the boats to float effectively while still holding a significant number of pennies."],
    outcomes: "These projects taught me creative problem-solving, practical 3D printing techniques, and how to balance competition goals with sustainability and real-world use. Beyond the technical lessons, I gained an appreciation for designing with purpose: making something that not only performs well in a challenge but also has long-term utility. The Penny Boat projects showed me how engineering can be fun, resourceful, and environmentally thoughtful all at the same time.",
    gallery: [
      "https://i.imgur.com/HAgbXWK.jpeg",
      "https://i.imgur.com/JHnkAsA.jpeg",
      "https://i.imgur.com/tUHkEFq.jpeg",
      "https://i.imgur.com/flFfWhH.jpeg",
      "https://i.imgur.com/RcIZIq9.png"
    ]
  },
    {
    id: 30,
    title: "Student Portfolio Upgrade",
    date: "Summer 2025",
    shortDescription: "Using AI Programing tools, coding skills, .",
    image: "https://i.imgur.com/YOzFYlx.png",
    tech: ["TypeScript", "Website Development", "Coding","AI Integration","bolt.new"],
    overview: "To showcase my engineering work in a professional way, I built my own portfolio website. The project began as an update to my old high school resume. My old portfolio was made in google sites and no longer felt representative of my skill level in college. While I had little prior web development experience, I used an AI-assisted coding platform to generate the base structure of the site, then gradually refined and expanded it. Over the course of about a month, I went from a template-driven beginner to someone much more confident navigating code, AI tools, and web publishing.",
    mainBody: ["The process began with the AI platform, which helped me generate the initial framework of the site. This gave me a template to build on, since I wasn't yet proficient enough in coding to design everything from scratch. On the baseline plan I had access to a very limited number of tokens, which forced me to dive into the raw code myself and save those tokens for when I was truly stuck. I migrated everything into GitHub and began manually editing and adjusting the site. This was slow and sometimes frustrating, but it gave me an accelerated learning curve by working off an existing base. I gradually became more comfortable making changes, fixing errors, and customizing the site to better fit my needs. Along the way, I picked up foundational skills in TypeScript and strengthened my ability to work with AI as a collaborative tool rather than a crutch.",
              "Another important step was learning how to buy a custom domain and publish the site under it. That process gave me hands-on experience with web infrastructure and the practical side of making a site accessible to the public. To tie it all together, I also created a laser-engraved NFC business card linked directly to my website. While NFC tags are simple and easy to make, the card felt like a fun, modern touch that makes sharing my portfolio both practical and memorable."],
    outcomes: "This project taught me far more than I expected going in. On the technical side, I gained confidence working with TypeScript, GitHub, and the basics of deploying a live website. I also saw firsthand how AI can accelerate learning when used thoughtfully, but that it can't replace the need to understand and engage with the material yourself. Beyond the technical lessons, I walked away with a tangible, professional portfolio that reflects my growth as an engineer, and a set of skills that I know will be useful moving forward. More broadly, this project reinforced the importance of adaptability—especially as AI becomes a bigger part of the engineering world—and showed me the value of persistence when facing something outside my comfort zone.",
    gallery: [
      "https://i.imgur.com/YOzFYlx.png",
      "https://i.imgur.com/t7uPOBw.png",
      "https://i.imgur.com/vCrxCPz.jpeg",
      "https://i.imgur.com/tpbEC7y.jpeg"
    ],
    pdfUrl: "https://sites.google.com/view/cboss-hs-en/home"
  },
   {
     /*remember to change the gallery number too line 500ish */
    id: 40,
    title: "Matlab Presentation",
    date: "October 2025",
    shortDescription: "ASME Tech Talk on the Utility of MATLAB",
    image: "https://i.imgur.com/99CDz4C.png",
    tech: ["Tech Talk", "Public Speaking", "Professional Communication","AI Integration","Technical Presentation","MATLAB"],
    overview: "As the Dual Secretary for the Penn State chapter of ASME, I work closely with both the executive board and multiple design teams to support technical engagement within the organization. Early in the semester, I delivered a large-scale technical presentation focused on MATLAB, a tool that many undergraduate engineers approach with hesitation or frustration. My goal was to reframe MATLAB as an accessible, powerful engineering resource when used correctly, and to demonstrate its relevance across coursework, design teams, and real-world engineering applications.",
    mainBody: [ "This presentation took place during the second week of classes at one of our early design team meetings and was attended by roughly 100 ASME members, ranging from first-year students to seniors. I spent a significant amount of time preparing custom MATLAB scripts, slides, and demonstrations designed to meet students at different experience levels. Rather than assuming prior comfort with the software, I focused on fundamentals, clarity, and practical use cases, emphasizing that many frustrations stem from how MATLAB is introduced rather than from the tool itself.",
        "To make the talk concrete and engaging, I built live demonstrations drawing from thermodynamics, vibrations, and data visualization. These examples reflected coursework I was actively using MATLAB for, particularly in my junior-year vibrations class, and showcased how the software can streamline problem-solving and enhance understanding. I also discussed how MATLAB concepts translate cleanly into other programming languages and how it can interface with hardware platforms such as Raspberry Pi and Arduino, broadening its usefulness beyond purely academic settings.",
        "A key section of the presentation addressed the responsible use of AI in programming. I emphasized using AI as a learning aid rather than a replacement for understanding, showing how it can support debugging, exploration, and efficiency without undermining engineering intuition or problem-solving skills. Throughout the process, I coordinated with ASME leadership and design team leads, balancing stakeholder input while maintaining clear boundaries so the presentation remained focused, cohesive, and true to my original intent. The result was one of the most well-attended Tech Talks hosted by an ASME member that semester."]
    ,
    outcomes: "This project strengthened my ability to plan and deliver a large technical talk to a diverse audience while maintaining confidence and clarity. I gained experience communicating with multiple stakeholders, defending my technical perspective professionally, and presenting content I genuinely care about. I also deepened my own understanding of MATLAB and emerging AI-assisted workflows, which made the project both educational and enjoyable. Most importantly, the experience reinforced the value of advocacy for good tools and good practices (especially when they are misunderstood),and showed me how thoughtful communication can shift perspectives and encourage growth within an engineering community.",
   gallery: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    pdfUrl: "/matlab_talk.pdf"
  },
  /*
  {
    id: 6,
    title: "Robotic Arm Control System",
    date: "Fall 2021",
    shortDescription: "A 6-DOF robotic arm with computer vision for precise object manipulation and sorting tasks.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    tech: ["Robotics", "Computer Vision", "Inverse Kinematics", "Machine Learning"],
    overview: "Built a sophisticated robotic arm system capable of identifying, grasping, and sorting objects of various shapes and sizes. The project integrated mechanical design, control systems, and artificial intelligence.",
    mainBody: "The 6-degree-of-freedom robotic arm was designed with custom joints and actuators for maximum flexibility and precision. A computer vision system using OpenCV identifies objects by shape, color, and size, then calculates optimal grasping strategies. Inverse kinematics algorithms determine the required joint angles to reach target positions while avoiding obstacles. The gripper mechanism adapts to different object geometries using compliant fingers with tactile feedback. Machine learning algorithms improve grasping success rates over time by learning from previous attempts. The system includes safety features such as collision detection and emergency stop capabilities.",
    outcomes: "Achieved 92% success rate in object identification and 87% success rate in grasping tasks across various object types. The system could sort up to 60 objects per hour with high accuracy. This project enhanced my skills in robotics, computer vision, and the integration of multiple complex systems.",
    gallery: [
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
  */
];

// Project Detail Component
function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id || '1'));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setModalImageIndex((prev) => (prev - 1 + project!.gallery.length) % project!.gallery.length);
      } else if (e.key === 'ArrowRight') {
        setModalImageIndex((prev) => (prev + 1) % project!.gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, project]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </header>

      {/* Project Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title and Date */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.date}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Photo Gallery */}
        {/* Photo Gallery or PDF Display */}
        {project.id === 20 ? (
          // PDF Preview for ELSA-d project
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Presentation Preview</h2>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={project.pdfUrl}
                className="w-full h-96"
                title="ELSA-d Technical Presentation"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ELSA-d Technical Presentation</h3>
                <p className="text-gray-600">Complete technical presentation on orbital debris and satellite retrieval technology.</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Photo Gallery or PDF Display */}
            {project.id === 40 ? (
          /* PDF Preview for Matlab project */
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Presentation Preview</h2>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={project.pdfUrl}
                className="w-full h-96"
                title="MATLAB Tutorial Technical Presentation"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">MATLAB Tutorial Technical Presentation</h3>
                <p className="text-gray-600">Complete technical presentation on MATLAB uses for undergraduate mechanical engineers.</p>
              </div>
            </div>
          </div>
        ) : (
          /* Regular Photo Gallery for other projects*/
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <div className="relative">
              <img
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
                onClick={() => openModal(currentImageIndex)}
              />
              
              {/* Gallery Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.gallery.length}
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImageIndex === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  } cursor-pointer`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(index);
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        </>
        )}

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.overview}</p>
            </section>

            {/* Main Body */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
              <div className="space-y-4">
                {Array.isArray(project.mainBody) ? (
                  project.mainBody.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 leading-relaxed text-lg">{project.mainBody}</p>
                )}
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcomes & Learning</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.outcomes}</p>
            {/* Old Portfolio Link Section */}
                {project.id === 30 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Previous Portfolio</h4>
                    <p className="text-blue-700 mb-3">
                      View my previous portfolio website to see earlier projects and work.
                    </p>
                    <button 
                      onClick={() => window.open('https://sites.google.com/view/cboss-hs-en/home', '_blank')}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Previous Portfolio
                    </button>
                  </div>
                )}

              {/* PDF Button for EE210 Karaoke project */}
              {project.id === 35 && project.pdfUrl && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Circuit Documentation</h4>
                  <p className="text-gray-600 mb-3">View the detailed circuit diagram and technical specifications.</p>
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FileText size={16} className="mr-2" />
                    View Circuit Diagram
                  </a>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Date</h4>
                  <p className="text-gray-600">{project.date}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Gallery */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 transition-colors duration-200"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <img
              src={project.gallery[modalImageIndex]}
              alt={`${project.title} - Full size image ${modalImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {modalImageIndex + 1} / {project.gallery.length}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <div className="flex space-x-2 overflow-x-auto max-w-md">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      modalImageIndex === index ? 'border-white' : 'border-gray-400 hover:border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Modal thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Portfolio Component
function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(result.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Catherine Boss</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/FgJr1hj.jpeg" 
              alt="Catherine Boss"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              Available for Work
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Catherine Boss
            </h1>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-lg text-slate-600">
                <GraduationCap className="w-5 h-5 mr-3 text-blue-600" />
                Mechanical Engineering with Minor in Mechatronics
              </div>
              <div className="flex items-center justify-center lg:justify-start text-lg text-slate-600">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                Penn State University • Class of 2027
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              I'm an engineer driven by a desire to be useful, make meaningful contributions, 
              and lead with purpose. I approach every challenge with focus, curiosity, and 
              dedication and try to leave everything better than I found it.
            </p>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
          <a
            href="/cboss_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5 mr-2" />
            Most Recent Resume
          </a>
          
          <a
            href="https://www.linkedin.com/in/catherine-boss-030207289/"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-200 text-slate-700 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          
          <a
            href="mailto:CatherineBoss27@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-200 text-slate-700 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Contact
          </a>
        </div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.imgur.com/H6dWrSv.jpeg"
                alt="About Catherine"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Engineering With Purpose
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a third-year Mechanical Engineering student with a passion for problem-solving and hands-on design. What excites me most is taking things apart, improving them, and leaving them better than I found them. I enjoy working with people just as much as I enjoy digging into a project on my own, and I feel at home leading discussions or presenting in front of a crowd. No matter where I am, I try to bring kindness, energy, and a positive attitude. Ultimately, I want to explore a wide variety of engineering experiences that will help shape my future while keeping curiosity and fun at the center of everything I do.


              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What I Do</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>SolidWorks/CAD</li>
                    <li>3D Printing</li>
                    <li>Mechatronics</li>
                    <li>Hands-On Solving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Who I Am</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Organized</li>
                    <li>Energetic </li>
                    <li>Curious</li>
                    <li>Communicative</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my engineering projects that showcase my skills in mechanical design, 
              creative problem solving, and technical skills.
            </p>
          </div>
          {/* use this to update featured projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{[40, 35, 25]
  .map(id => projectsData.find(project => project.id === id))
  .filter(Boolean)
  .map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-600 mb-3">{project.date}</p>
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    <span className="mr-2">View Details</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* See More Projects Button */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span className="mr-2">See More Projects</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey includes internships and research positions that have 
              strengthened my technical skills and industry knowledge.
            </p>
          </div>

          <div className="space-y-8">
            {experienceData.map((experience) => (
              <div
                key={experience.id}
                className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-x2 transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Building size={16} className="mr-2 text-blue-600" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-600" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-blue-600" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and discussions about 
              engineering projects. Let's connect and explore how we can work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="mailto:catherineboss27@gmail.com"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:-translate-y-1"
              >
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <p className="font-medium text-gray-900 mb-1">Email</p>
                <p className="text-gray-600 text-sm text-center">catherineboss27@gmail.com</p>
              </a>
              <a
                href="https://linkedin.com/in/catherineboss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:-translate-y-1"
              >
                <Linkedin className="w-8 h-8 text-blue-600 mb-3" />
                <p className="font-medium text-gray-900 mb-1">LinkedIn</p>
                <p className="text-gray-600 text-sm text-center">Professional network</p>
              </a>
              <a
                href="https://github.com/Cat-B"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:-translate-y-1"
              >
                <Github className="w-8 h-8 text-blue-600 mb-3" />
                <p className="font-medium text-gray-900 mb-1">GitHub</p>
                <p className="text-gray-600 text-sm text-center">Code & projects</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Catherine Boss</h3>
            <p className="text-gray-400 mb-6">Mechanical Engineering Student | Problem Solver | Future Engineer</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:catherineboss27@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/catherine-boss-030207289/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/catherineboss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">&copy; 2024 Catherine Boss. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// App Component with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsGallery />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
