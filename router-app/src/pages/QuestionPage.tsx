import React from 'react'
import { useParams } from 'react-router-dom';

export default function QuestionPage() {
  let params = useParams<{questionId: string;}>();

  console.log(params);

  return (
    <div>QuestionPage</div>
  )
}
