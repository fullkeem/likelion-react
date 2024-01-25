import contactData from '../data/contacts.json';
import Avatar from './component/Avatar/Avatar';

// console.log(contactData.items /* [...] */);

function Exercise() {
  //contactData.items [{id, gender, name, face, ...}]
  const items = contactData.items.map((item) => {
    if (item.face >= 5) {
      item.face = 4;
    }

    // 랜덤 온/오프라인 설정

    //문
    // if (Math.random() >= 0.5) {
    //   item.isOnline = true;
    // } else {
    //   item.isOnline = false;
    // }

    //식
    item.isOnline = Math.random() >= 0.5;

    return item;
  }); // map 메서드 => 새로운 배열

  //console.log(items);

  return (
    <ul>
      {contactData.items.map(({ id, gender, face, name, isOnline }) => {
        const photoUrl = `/faces/${gender}-0${face}.jpg`;
        console.log(photoUrl);
        return (
          <li key={id}>
            <Avatar photo={photoUrl} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

export default Exercise;
