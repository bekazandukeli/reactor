import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';

interface HomeProps {
  params: {
    username: string;
  }
}

export default function Profile(props: HomeProps) {
  console.log('პარამსი: ', props);
  const router = useRouter()
  const { username } = router.query
  
  return (
    <div>{username}</div>
  )
}

export const getServerSideProps = (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  console.log(context);

  return {
    props: {
      params: context.params
    }
  }
}
