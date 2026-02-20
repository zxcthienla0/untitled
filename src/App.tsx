import { Header } from "./header.tsx";
import { Timer } from "./main/timer.tsx";
import { AllInfo } from "./main/allInfo.tsx";
import { PlaceInfo } from "./main/placeInfo.tsx";
import { GiftInfo } from "./main/gift.tsx";
function App() {
  return (
    <>
      <div className="bg-[#FBF8F1] -z-20">
        <Header />
        <AllInfo />
        <PlaceInfo />
        <GiftInfo />
        <Timer />
      </div>
    </>
  )
}

export default App
