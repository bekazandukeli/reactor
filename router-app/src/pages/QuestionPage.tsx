import React from 'react'
import { useLoaderData } from 'react-router-dom';

const question = {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

type Question = typeof question;

export default function QuestionPage() {
  let questinData = useLoaderData() as Question;
  
  return (
    <div>QuestionPage
      <div>კითხვა: {questinData.title}</div>
      <div>პასუხი: {questinData.body}</div>
    </div>
  )
}
