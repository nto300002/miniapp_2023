import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-gray-100 mt-10 p-28">
      <span className="text-blue-300 text-5xl">
        <Link to="/game">START</Link>
      </span>
      <p className="text-red-500">*PC用ゲームです</p>
    </div>
  )
}
