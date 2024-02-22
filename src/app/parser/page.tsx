import ParseForm from '@/components/ParseForm';
import StateContextComponent from '@/app/parser/context';

export default function Home() {
  return (
    <StateContextComponent>
    <div className='px-5 py-7'>
      <h2 className='main-title text-3xl'>Parser</h2>
      <ParseForm />
    </div>
    </StateContextComponent>
  );
}
