import "../assets/style.css";

const Projects = () => {
  return (
    <div id="projects" className="section-wrapper">
      <h1>Projects</h1>
      <div className="oneline-project">
        프로젝트에 대해 어떻게 참여했는지, 어떤 성과를 냈는지 간단 설명
      </div>
      <div className="portfolio">
        {/* 반복되는 프로젝트 카드들을 컴포넌트로 더 분리 가능 */}
      </div>
    </div>
  );
};

export default Projects;
