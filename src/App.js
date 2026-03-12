import { useState } from "react";

const subTopics = [
  { id: "statistics", title: "Placement Statistics" },
  { id: "trainings", title: "Placement Trainings" },
  { id: "recruiters", title: "Our Recruiters" },
  { id: "contact", title: "Placement Contact" },
];

const Para = ({ children }) => (
  <p
    style={{
      fontSize: "0.93rem",
      lineHeight: 1.82,
      textAlign: "justify",
      marginBottom: 12,
      color: "#333",
    }}
  >
    {children}
  </p>
);

const MissionBlock = ({ children }) => (
  <div
    style={{
      background: "#fff",
      borderLeft: "4px solid #e91e8c",
      borderRadius: 8,
      padding: "22px 26px",
      marginBottom: 26,
      boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
    }}
  >
    <h3
      style={{
        color: "#e91e8c",
        fontSize: "1.05rem",
        marginBottom: 14,
        paddingBottom: 8,
        borderBottom: "1px dotted #f0a0c8",
      }}
    >
      Our Mission »
    </h3>
    {children}
  </div>
);

const PageHero = ({ title, breadcrumb }) => (
  <div
    style={{
      background: "linear-gradient(135deg,#1a3a6e,#1e5ba8)",
      padding: "28px 24px 22px",
      borderBottom: "4px solid #e91e8c",
    }}
  >
    <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: 6 }}>
      {title}
    </h2>
    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.7)" }}>
      Home / Placement /{" "}
      <span style={{ color: "#e91e8c", fontWeight: 600 }}>{breadcrumb}</span>
    </div>
  </div>
);

const BackBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "#1a3a6e",
      color: "#fff",
      border: "none",
      borderRadius: 6,
      padding: "8px 18px",
      fontSize: "0.85rem",
      fontWeight: 600,
      cursor: "pointer",
      marginBottom: 22,
    }}
  >
    ← Back
  </button>
);

const BarChart = ({ data, title, keyF, valF }) => {
  const max = Math.max(...data.map((d) => d[valF]));
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: "18px 16px 12px",
        marginBottom: 24,
        boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "0.88rem",
          color: "#333",
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 10,
          height: 150,
          borderLeft: "2px solid #bbb",
          borderBottom: "2px solid #bbb",
          padding: "0 8px",
        }}
      >
        {data.map((d, i) => {
          const h = Math.round((d[valF] / max) * 130);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                gap: 4,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: h,
                  background: "linear-gradient(180deg,#5b9bd5,#3a78b5)",
                  borderRadius: "3px 3px 0 0",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: 3,
                  fontSize: "0.62rem",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                {d[valF]}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "#555",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {d[keyF]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const batch2024 = [
  { branch: "AUTO", placed: 9 },
  { branch: "CIVIL", placed: 27 },
  { branch: "CSE", placed: 35 },
  { branch: "ECE", placed: 36 },
  { branch: "EEE", placed: 26 },
  { branch: "IT", placed: 20 },
  { branch: "MECH", placed: 33 },
];
const batch2025 = [
  { sno: 1, branch: "Auto", placed: 15 },
  { sno: 2, branch: "Civil", placed: 25 },
  { sno: 3, branch: "CSE", placed: 30 },
  { sno: 4, branch: "EEE", placed: 24 },
  { sno: 5, branch: "ECE", placed: 33 },
  { sno: 6, branch: "Mech", placed: 16 },
  { sno: 7, branch: "IT", placed: 30 },
];
const campusDrives = [
  "2007-2011",
  "2008-2012",
  "2009-2013",
  "2010-2014",
  "2011-2015",
  "2012-2016",
  "2013-2017",
  "2014-2018",
  "2015-2019",
  "2016-2020",
  "2017-2021",
  "2018-2022",
  "2019-2023",
  "2020-2024",
  "2021-2025",
];
const softwareR = [
  ["Zoho", "Povassure Software Technologies"],
  ["CTS", "Genpixels Pvt Ltd"],
  ["HCL", "Unilogic"],
  ["Infosys", "Silicon house"],
  ["LTIMindtree", "Silicic Innova technologies"],
  ["Xoriant", "Nativer"],
  ["Xenovex", "Airavad Web solutions"],
  ["Elbrit Life Science Pvt Ltd", "Ideasurge"],
  ["D3 Minds", "Orchestra AI"],
  ["Impiger Technologies", "Silicic Innova technologies"],
  ["Narayana health", "Adra Product Studio"],
  ["KLM Solutions", "Impera"],
];
const coreR = [
  ["Cadence Systems", "Camware Technologies"],
  ["Brakes India", "Spaark Technologies"],
  ["Delphi TVS", "Kausi Technical Services Pvt Ltd"],
  ["Ambigai Consultancy Services", "Sion Semi Conductor, Bangalore"],
  ["Conserve Solutions", "Motherson Health and Medical System Ltd"],
  ["Magna", "Elecnovo Pvt.Ltd"],
  ["IndoMIM", "Rane Steels"],
  ["Fujitec Elecvators", "Aarbe steel structures pvt.ltd."],
  ["Rack Industrial Solutions", "Prget Sound Steel Rebar Engineering Pvt Ltd"],
  ["AquaSab Engineering", "Arrow Rebar"],
  ["Jauatics", "Sieverts India Pvt Ltd"],
  ["Cherry Precisions", "Stellantis"],
];

const thS = {
  background: "#f0f4fa",
  color: "#1a3a6e",
  padding: "8px 10px",
  border: "1px solid #dde3ec",
  textAlign: "center",
  fontWeight: 700,
};
const tdS = (x = {}) => ({
  padding: "8px 10px",
  border: "1px solid #dde3ec",
  textAlign: "center",
  ...x,
});

const PlacementStatistics = ({ onBack }) => (
  <div>
    <PageHero
      title="Placement Statistics @ GCEE"
      breadcrumb="Placement Statistics"
    />
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 16px 48px" }}>
      <BackBtn onClick={onBack} />
      <MissionBlock>
        <Para>
          A Separate placement section is functioning to arrange for campus
          interviews and other placement works under the guidance of Dr.
          P.KALIRAM, Placement Officer(PO). Every Year above 90% of students are
          placed in various companies. At GCEE, each department has placement
          representative and a student cell co-ordinator.
        </Para>
        <Para>
          The Placement section is well organized by our students. They play
          their role very well in training the students for the placements. The
          aim of our placement section is to have 100 percent placement in
          GCEE(IRTT). the Placement section organizes various programmes for
          improving the skill's of the students. It conducts various coaching
          classes and mock interviews for the students to overcome the fear of
          interviews.
        </Para>
        <Para>
          The placement Cell maintains a rich alumni database through which the
          students keep themselves updated of the happenings in the corporate
          area. There is a healthy, co-ordinated effort between students and
          faculty from all departments with respect to all placement activities.
          Various reputed concerns visit our campus frequently to recruit our
          high caliber engineers. In plant training and industrial visits are
          arranged by the placement cell to strengthen the Industry - Institute
          relationship.
        </Para>
        <Para>
          GCEE(IRTT) has estabilished{" "}
          <strong>Industry-Institute partnership(IIP)</strong> Cell. It offers
          courses on the latest developments in Engineering and Technology
          (on-campus and off-campus). Imparting in-plant training to students
          and faculty at industries.
        </Para>
      </MissionBlock>

      <h3
        style={{
          color: "#1a3a6e",
          fontSize: "1.15rem",
          textAlign: "center",
          marginBottom: 22,
        }}
      >
        Last Two academic Years Placement Details
      </h3>

      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            background: "#1a3a6e",
            color: "#fff",
            padding: "10px 16px",
            fontWeight: 700,
            fontSize: "0.88rem",
            textAlign: "center",
          }}
        >
          2020-2024 Batch
        </div>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.85rem",
            }}
          >
            <thead>
              <tr>
                <td colSpan={2} style={{ ...thS, textAlign: "left" }}>
                  Total companies visited the Institution
                </td>
                <td colSpan={3} style={thS}>
                  26
                </td>
              </tr>
              <tr>
                {[
                  "Branch Name",
                  "No. of students placed",
                  "Total students Attending",
                  "Total placed",
                  "Highest Salary",
                ].map((h) => (
                  <th key={h} style={thS}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {batch2024.map((r, i) => (
                <tr
                  key={i}
                  style={{ background: i % 2 === 0 ? "#fff" : "#f8faff" }}
                >
                  <td style={tdS()}>{r.branch}</td>
                  <td style={tdS()}>{r.placed}</td>
                  {i === 0 && (
                    <>
                      <td rowSpan={7} style={tdS({ verticalAlign: "middle" })}>
                        308
                      </td>
                      <td rowSpan={7} style={tdS({ verticalAlign: "middle" })}>
                        189
                      </td>
                      <td
                        rowSpan={7}
                        style={tdS({
                          verticalAlign: "middle",
                          fontWeight: 700,
                          color: "#1a6e3a",
                        })}
                      >
                        17.5 LPA
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <BarChart
        data={batch2024}
        title="2020-24 Batch"
        keyF="branch"
        valF="placed"
      />

      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            background: "#1a3a6e",
            color: "#fff",
            padding: "10px 16px",
            fontWeight: 700,
            fontSize: "0.88rem",
            textAlign: "center",
          }}
        >
          2024-2025
        </div>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.85rem",
            }}
          >
            <thead>
              <tr>
                <td colSpan={3} style={{ ...thS, textAlign: "left" }}>
                  No. of Companies visited
                </td>
                <td colSpan={3} style={thS}>
                  27
                </td>
              </tr>
              <tr>
                {[
                  "S.No",
                  "Branch",
                  "Students placed",
                  "Students attended",
                  "Total Placed",
                  "Highest Salary",
                ].map((h) => (
                  <th key={h} style={thS}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {batch2025.map((r, i) => (
                <tr
                  key={i}
                  style={{ background: i % 2 === 0 ? "#fff" : "#f8faff" }}
                >
                  <td style={tdS()}>{r.sno}</td>
                  <td style={tdS()}>{r.branch}</td>
                  <td style={tdS()}>{r.placed}</td>
                  {i === 0 && (
                    <>
                      <td rowSpan={7} style={tdS({ verticalAlign: "middle" })}>
                        309
                      </td>
                      <td rowSpan={7} style={tdS({ verticalAlign: "middle" })}>
                        173
                      </td>
                      <td
                        rowSpan={7}
                        style={tdS({
                          verticalAlign: "middle",
                          fontWeight: 700,
                          color: "#1a6e3a",
                        })}
                      >
                        20.49 LPA
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <BarChart
        data={batch2025}
        title="2021-2025 Batch"
        keyF="branch"
        valF="placed"
      />

      <button
        style={{
          background: "#e91e8c",
          color: "#fff",
          border: "none",
          borderRadius: 5,
          padding: "10px 22px",
          fontWeight: 700,
          fontSize: "0.88rem",
          cursor: "pointer",
          marginBottom: 28,
        }}
      >
        » Placement Statistics
      </button>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {campusDrives.map((yr) => (
          <div
            key={yr}
            style={{
              background: "#fff",
              border: "1px solid #dde3ec",
              borderRadius: 6,
              padding: "13px 18px",
              fontSize: "0.84rem",
              fontWeight: 700,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f5ff";
              e.currentTarget.style.borderColor = "#2563b0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#dde3ec";
            }}
          >
            PLACEMENT & TRAINING CELL CAMPUS DRIVE DETAILS OF {yr}{" "}
            <span style={{ color: "#aaa" }}>»</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PlacementTrainings = ({ onBack }) => {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div>
      <PageHero
        title="Placement Trainings @GCEE"
        breadcrumb="Placement Trainings"
      />
      <div
        style={{ maxWidth: 860, margin: "0 auto", padding: "28px 16px 48px" }}
      >
        <BackBtn onClick={onBack} />
        <MissionBlock>
          <Para>
            A Separate placement section is functioning for the campus
            interviews and other placement activities under the guidance of
            Training and Placement Officer(TPO). Every Year above 90% of
            students are placed in various reputed companies. At GCEE(IRTT),
            each department has a placement staff coordinator and a student
            coordinator.
          </Para>
          <Para>
            The Placement Cell is well organized by our students. They play
            their role very well in training the students for the placements.
            The aim of our placement section is to have 100 percent placement in
            GCEE(IRTT). The Placement section organizes various programmes for
            improving the skill's of the students. It conducts various training
            classes and mock interviews for the students to overcome the fear of
            interviews.
          </Para>
          <Para>
            The placement Cell maintains a rich alumni database through which
            the students keep themselves updated of the recent happenings in the
            industry. There is a healthy, co-ordinated effort between students
            and faculty from all departments with respect to all placement
            activities. Various reputed companies visit our campus frequently to
            recruit our students. Inplant training and industrial visits are
            arranged by the placement cell to strengthen the Industry -
            Institute relationship.
          </Para>
          <Para>
            GCEE(IRTT) has estabilished{" "}
            <strong>Industry-Institute partnership(IIP)</strong> Cell. It offers
            courses on the latest developments in Engineering and Technology
            (on-campus and off-campus). Imparting in-plant training to students
            and faculty at industries.
          </Para>
        </MissionBlock>

        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: "24px 16px",
            marginBottom: 24,
            boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontWeight: 700,
              color: "#1a3a6e",
              fontSize: "0.95rem",
              marginBottom: 24,
            }}
          >
            Snapshot of Our Training Schedule
          </div>
          <div style={{ display: "flex", minWidth: 540 }}>
            {[
              {
                label: "FIRST YEAR",
                color: "#1a3a6e",
                items: ["Communication skills", "Attitude Building"],
                light: "#dbeaff",
                border: "#8ab4e0",
                text: "#1a3a6e",
              },
              {
                label: "SECOND YEAR",
                color: "#e8a020",
                items: [
                  "Aptitude Training",
                  "Critical Thinking",
                  "System Design",
                  "Problem Solving skills",
                ],
                light: "#fff8ee",
                border: "#f0c060",
                text: "#7a4a00",
              },
              {
                label: "THIRD YEAR",
                color: "#2a7fb5",
                items: [
                  "Technical Training",
                  "Projects Development",
                  "Resume Writing",
                ],
                light: "#dbeaff",
                border: "#8ab4e0",
                text: "#1a3a6e",
              },
              {
                label: "FOURTH YEAR",
                color: "#c8860a",
                items: ["Mock Interview"],
                light: "#fff8ee",
                border: "#f0c060",
                text: "#7a4a00",
              },
            ].map((n, i, arr) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {i < arr.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: "50%",
                      width: "100%",
                      height: 2,
                      background: "#aaa",
                      zIndex: 0,
                    }}
                  />
                )}
                <div
                  style={{
                    background: n.color,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.6rem",
                    padding: "8px 6px",
                    borderRadius: 6,
                    textAlign: "center",
                    zIndex: 1,
                    width: 72,
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  {n.label}
                </div>
                <div
                  style={{
                    background: n.light,
                    border: `1px solid ${n.border}`,
                    borderRadius: 6,
                    padding: "8px",
                    fontSize: "0.66rem",
                    textAlign: "center",
                    color: n.text,
                    lineHeight: 1.6,
                    width: "88%",
                  }}
                >
                  {n.items.map((it, j) => (
                    <div key={j}>{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {!imgErr ? (
          <img
            src="https://i.ibb.co/hxwgfHJ2/training.jpg"
            alt="Students attending placement training session at GCEE"
            onError={() => setImgErr(true)}
            style={{
              width: "100%",
              borderRadius: 8,
              marginBottom: 8,
              objectFit: "cover",
              maxHeight: 320,
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: 220,
              background: "linear-gradient(135deg,#1a3a6e,#2a6eb5)",
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
              color: "#fff",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: 8 }}>👩‍🏫</div>
            <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>
              Training Session @ GCEE
            </div>
            <div style={{ fontSize: "0.75rem", opacity: 0.8, marginTop: 4 }}>
              Students attending placement training
            </div>
          </div>
        )}
        <div
          style={{
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#999",
            marginBottom: 24,
            fontStyle: "italic",
          }}
        >
          Students attending placement training session at GCEE(IRTT)
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: "22px 26px",
            boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            style={{
              fontSize: "1.05rem",
              color: "#333",
              marginBottom: 14,
              fontWeight: 600,
            }}
          >
            Focus of Our Training
          </h3>
          <hr style={{ marginBottom: 14, borderColor: "#eee" }} />
          <ul style={{ paddingLeft: 20 }}>
            {[
              "Molding the students to meet the requirements of corporate screening process is an important task.",
              "Training is much more important in the placement activities.",
              "Training cell is active in organizing intensive training program covering Quantitative Aptitude, Logical Reasoning, Verbal Reasoning, Soft Skills and company specific training.",
            ].map((it, i) => (
              <li
                key={i}
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  marginBottom: 10,
                  color: "#333",
                }}
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const OurRecruiters = ({ onBack }) => (
  <div>
    <PageHero title="Placements Recruiters @GCEE" breadcrumb="Our Recruiters" />
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 16px 48px" }}>
      <BackBtn onClick={onBack} />
      <MissionBlock>
        <Para>
          A Separate placement section is functioning to arrange for campus
          interviews and other placement works under the guidance of{" "}
          <strong>
            Dr.Thirugnanasambandan, Training and Placement Officer.
          </strong>{" "}
          Every Year above 90% of students are placed in various companies. At
          GCE, Erode each department has placement representative and a student
          cell co-ordinator.
        </Para>
        <Para>
          The Placement section is well organized by our students. They play
          their role very well in training the students for the placements. The
          aim of our placement section is to have 100 percent placement in GCE,
          Erode. The Placement section organizes various programmes for
          improving the skill's of the students. It conducts various coaching
          classes and mock interviews for the students to overcome the fear of
          interviews.
        </Para>
        <Para>
          The placement Cell maintains a rich alumni database through which the
          students keep themselves updated of the happenings in the corporate
          area. There is a healthy, co-ordinated effort between students and
          faculty from all departments with respect to all placement activities.
          Various reputed concerns visit our campus frequently to recruit our
          high caliber engineers. In plant training and industrial visits are
          arranged by the placement cell to strengthen the Industry - Institute
          relationship.
        </Para>
        <Para>
          GCE, Erode has estabilished{" "}
          <strong>Industry-Institute partnership(IIP)</strong> Cell. It offers
          courses on the latest developments in Engineering and Technology
          (on-campus and off-campus). Also, imparting in-plant training to the
          students and faculty at industries.
        </Para>
      </MissionBlock>
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.82rem",
            }}
          >
            <thead>
              <tr>
                <th
                  colSpan={2}
                  style={{
                    background: "#1a3a6e",
                    color: "#fff",
                    padding: "10px 14px",
                    textAlign: "center",
                    borderRight: "2px solid #fff",
                  }}
                >
                  Software Recruiters / Internship Companies
                </th>
                <th
                  colSpan={2}
                  style={{
                    background: "#2a6eb5",
                    color: "#fff",
                    padding: "10px 14px",
                    textAlign: "center",
                  }}
                >
                  Core Recruiters / Internship Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({
                length: Math.max(softwareR.length, coreR.length),
              }).map((_, i) => (
                <tr
                  key={i}
                  style={{ background: i % 2 === 0 ? "#fff" : "#f8faff" }}
                >
                  <td style={tdS()}>{softwareR[i]?.[0] || ""}</td>
                  <td style={tdS({ borderRight: "2px solid #c0c8d8" })}>
                    {softwareR[i]?.[1] || ""}
                  </td>
                  <td style={tdS()}>{coreR[i]?.[0] || ""}</td>
                  <td style={tdS()}>{coreR[i]?.[1] || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

const PlacementContact = ({ onBack }) => (
  <div>
    <PageHero title="Placement Contact" breadcrumb="Placement Contact" />
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: "0 1rem" }}>
      <BackBtn onClick={onBack} />
      <div
        style={{
          background: "#fff",
          borderRadius: 10,
          padding: "2rem",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#1a3a6e", marginBottom: 8 }}>Dr. P. Kaliram</h2>
        <p style={{ color: "#555", marginBottom: 4 }}>Placement Officer</p>
        <p style={{ color: "#555", marginBottom: 16 }}>
          GCE Erode - 638316, Tamilnadu
        </p>
        <p>📧 gceerodeplacement@gmail.com</p>
        <p>📧 placement@gcee.ac.in</p>
        <p>📞 9280091830 (Official)</p>
        <p>📞 8610539611 (Personal)</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [page, setPage] = useState(null);
  const goTo = (id) => setPage(id);
  const goBack = () => setPage(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f6fa",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <nav style={{ background: "#1a3a6e" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.75rem 2rem",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div
            onClick={() => setPage(null)}
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.2rem",
              cursor: "pointer",
              marginRight: "2rem",
            }}
          >
            GCEE (IRTT)
          </div>
          <div
            style={{
              color: "#e91e8c",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: 1,
            }}
          >
            PLACEMENT
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem 2rem",
          }}
        >
          {[
            { label: "» Placement Statistics", key: "statistics" },
            { label: "» Placement Trainings", key: "trainings" },
            { label: "» Our Recruiters", key: "recruiters" },
            { label: "» Placement Contact", key: "contact" },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => setPage(item.key)}
              style={{
                color: page === item.key ? "#e91e8c" : "#cce0ff",
                padding: "0.4rem 0",
                cursor: "pointer",
                fontSize: "0.88rem",
                fontWeight: page === item.key ? 700 : 400,
                borderLeft:
                  page === item.key
                    ? "3px solid #e91e8c"
                    : "3px solid transparent",
                paddingLeft: "0.75rem",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </nav>

      {!page && (
        <div
          style={{
            maxWidth: 860,
            margin: "60px auto",
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          <h2
            style={{ color: "#1a3a6e", fontSize: "1.6rem", marginBottom: 10 }}
          >
            Welcome to GCEE Placement Portal
          </h2>
          <p style={{ color: "#666", fontSize: "0.95rem" }}>
            Click the <strong>Placement</strong> link above to explore
            sub-topics.
          </p>
        </div>
      )}
      {page === "statistics" && <PlacementStatistics onBack={goBack} />}
      {page === "trainings" && <PlacementTrainings onBack={goBack} />}
      {page === "recruiters" && <OurRecruiters onBack={goBack} />}
      {page === "contact" && <PlacementContact onBack={goBack} />}
    </div>
  );
}
