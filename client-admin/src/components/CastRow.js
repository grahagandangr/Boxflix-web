export default function CastRow({ cast, idx }) {
  return (
    <>
      <tr className="hover">
        <td>{idx + 1}</td>
        <td>{cast.name}</td>
        <td>
          <img
            className="w-20 h-20 object-cover rounded-full m-0 p-0 mx-auto my-auto"
            src={cast.profilePict}
            alt={cast.name}
          />
        </td>
        <td>{cast.character}</td>
        <td>{cast.Movie.title}</td>
      </tr>
    </>
  );
}
