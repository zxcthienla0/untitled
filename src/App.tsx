import { Header } from "./header.tsx";
import { Timer } from "./main/timer.tsx";
import { AllInfo } from "./main/allInfo.tsx";
import { PlaceInfo } from "./main/placeInfo.tsx";
import { GiftList } from "./main/giftList.tsx";
import { GuestForm } from "./main/guestForm.tsx";
function App() {
  return (
    <>
      <div className="bg-[#FBF8F1] -z-20">
        <Header />
        <AllInfo />
        <GuestForm />
        <PlaceInfo />
        <Timer />
        <GiftList />
      </div>
    </>
  )
}

export default App
