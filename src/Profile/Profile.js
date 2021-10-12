import s from "../Profile/Profile.module.css"

export default function Profile(props) {
    const {name, tag, location, avatar, followers, views, likes} = props;
    return (<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
            <p className="name">{name}</p>
            <p className="tag">{ tag}</p>
            <p className="location">{ location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers:</span>
      <span className="quantity"> {followers}</span>
    </li>
    <li>
      <span className="label">Views: </span>
                <span className="quantity">{views }</span>
    </li>
    <li>
      <span className="label">Likes: </span>
                <span className="quantity">{ likes}</span>
    </li>
  </ul>
</div>)
}