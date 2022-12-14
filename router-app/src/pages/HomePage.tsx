import { useLocation } from "react-router-dom"

export default function HomePage() {
  const location = useLocation();

  console.log(location.state?.name);

  return (
    <div>
      HomePage
      <p>{location.state?.name}</p>
    </div>
  )
}
