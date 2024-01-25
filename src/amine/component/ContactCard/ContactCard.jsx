import './ContactCard.css';

const IMAGE_URL =
  'https://raw.githubusercontent.com/yamoo9/assets/master/images/faces';

function ContactCard({ name, job, email, face, ext = 'jpg' }) {
  return (
    <li className="ContactCardItem">
      <img src={`${IMAGE_URL}/${face}.${ext}`} height={90} width={90} alt />
      <strong>{name}</strong>
      <dl>
        <dt>직업</dt>
        <dd>{job}</dd>
        <dt>이메일</dt>
        <dd>
          <a href={`mailto:${email}`}>{email}</a>
        </dd>
      </dl>
    </li>
  );
}

function Exercise() {
  return (
    <ul className="ContactCard">
      <ContactCard
        face="woman/02"
        name="박연주"
        job="웹 디자이너"
        email="ayounju@dev.io"
      />
      <ContactCard
        face="man/03"
        name="박선호"
        job="웹 개발자"
        email="parksh@dev.io"
      />
      <ContactCard
        face="woman/04"
        name="최하영"
        job="웹 기획자"
        email="choi-ha@dev.io"
      />
    </ul>
  );
}

export default Exercise;
