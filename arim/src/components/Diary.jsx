import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Diary() {
  const [list, setList] = useLocalStorage('diaries', []);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleAdd = () => {
    const newTitle = title.replace(/\s/g, '');
    const newContents = contents.replace(/\s/g, '');

    if (newTitle === '' || newContents === '') return;

    const newDiary = {
      id: Date.now(),
      title: newTitle,
      contents: newContents,
    };
    setList([...list, newDiary]);
    setTitle('');
    setContents('');
    alert('성공적으로 제출했습니다.');
  };

  return (
    <div>
      <h2>일기 입력</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="간단한 내용"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        rows={4}
        style={{ width: '300px', marginTop: '10px' }}
      />
      <br />
      <button onClick={handleAdd}>제출</button>

      <h3>일기 목록</h3>
      <ul>
        {list.map((diary) => (
          <li key={diary.id}>
            <Link to={`/diary/${diary.id}`}>
              <strong>{diary.title}</strong>: {diary.contents}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
