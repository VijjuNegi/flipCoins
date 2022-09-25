import React from "react";
const ViewOne = ({ onClick }) => (
  <div>
    View 1 <br />
    <button onClick={() => onClick("view2")}>Go to view 2</button>
  </div>
);

const ViewTwo = ({ onClick }) => (
  <div>
    View 2 <br />
    <button onClick={() => onClick("view1")}>Go to view 1</button>
  </div>
);
const ViewThree = ({ onClick }) => (
  <div>
    View 3 <br />
    <button onClick={() => onClick("view3")}>Go to view 3</button>
  </div>
);

const AppOne = () => {
  const [currentView, setCurrentView] = React.useState("");

  return (
    <div>
      {currentView === "view1" ? (
        <ViewOne onClick={(page) => setCurrentView(page)} />
      ) : (
        <ViewTwo onClick={(page) => setCurrentView(page)} />
      )}
    </div>
  );
};
export default AppOne;
