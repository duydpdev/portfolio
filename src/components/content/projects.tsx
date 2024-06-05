import { useState } from "react";
import DrawerModal from "../modal/drawer.modal";
import { projectData } from "@/constant/project.data";
import { BsArrowRight } from "react-icons/bs";
import { Project, ProjectDetail } from "@/types/project";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [detailProject, setDetailProject] = useState<Project>();

  const showDrawer = (project: Project) => {
    setDetailProject(project);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  console.log(detailProject);

  return (
    <>
      <DrawerModal title={detailProject?.title} open={open} onClose={onClose}>
        <div>
          <p>{detailProject?.detail.descriptions}</p>
          <p>{detailProject?.detail.descriptions}</p>
          <p>{detailProject?.detail.descriptions}</p>
        </div>
      </DrawerModal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
              <span>Projects have finished</span>
            </div>
            <div className="list_wrap">
              <ul>
                {projectData.map((project, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      showDrawer(project);
                    }}
                  >
                    <div className="inner">
                      <div className="icon">
                        <img
                          className="svg"
                          src={project.image}
                          alt={project.title}
                        />
                      </div>
                      <div className="title_service">
                        <h3>{project.title}</h3>
                      </div>
                      <div className="text">
                        <p>{project.description}</p>
                      </div>
                      <div
                        className="view_detail"
                        style={{
                          padding: "5px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "#E3872D",
                        }}
                      >
                        <BsArrowRight />
                        <p>View Detail</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
