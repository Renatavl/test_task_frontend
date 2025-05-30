import CompanyInfo from "./components/CompanyInfo";
import { Mosaic, MosaicWindow } from "react-mosaic-component";

import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

type ViewId = "a" | "b" | "c";
interface IItem {
  title: string;
  companyId: string;
}

const TITLE_MAP: Record<ViewId, IItem> = {
  a: { title: "Apple Inc.", companyId: "com_NX6GzO" },
  b: { title: "NVDA", companyId: "com_agj00z" },
  c: { title: "MSFT", companyId: "com_qzEByJ" },
};

const HomeView = () => {
  return (
    <div id="app">
      <Mosaic<ViewId>
        blueprintNamespace="bp4"
        renderTile={(id, path) => (
          <MosaicWindow<ViewId> path={path} title={TITLE_MAP[id].title}>
            <CompanyInfo companyId={TITLE_MAP[id].companyId} />
          </MosaicWindow>
        )}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c",
          },
        }}
      />
    </div>
  );
};

export default HomeView;
