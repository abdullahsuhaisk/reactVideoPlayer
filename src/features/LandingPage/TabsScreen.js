import React, { useState } from "react";
import { TabsItem1, TabsItem2, TabsItem3 } from "./TabsItems";
import Tabs from "./Tabs";

const TabsScreen = () => {
  const [whichTabsRender, setTabsRender] = useState("TabsItem1");

  return (
    <div>
      <Tabs setTabsRender={setTabsRender} whichTabsRender={whichTabsRender} />
      {whichTabsRender === "TabsItem1" ? (
        <TabsItem1 />
      ) : whichTabsRender === "TabsItem2" ? (
        <TabsItem2 />
      ) : whichTabsRender === "TabsItem3" ? (
        <TabsItem3 />
      ) : null}
    </div>
  );
};
export default TabsScreen;
