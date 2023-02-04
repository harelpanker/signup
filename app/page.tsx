import Form from '@/components/signup/Form';
import Header from '@/components/Header';
import Container from '@/components/Container';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='px-5 py-9'>
        <Container>
          <Form />
        </Container>
      </main>
    </div>
  );
}
