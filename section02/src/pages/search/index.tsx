import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // 서버에서만 실행되며, 클라이언트에서는 실행되지 않음

  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    }
  } 
}

export default function Page({books}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <div>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property='og:image' content="/thumbnail.png" />
        <meta property='og:title' content="한입북스" />
        <meta property='og:description' content="한입북스에 등록된 도서들을 만나보세요" />
      </Head>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};