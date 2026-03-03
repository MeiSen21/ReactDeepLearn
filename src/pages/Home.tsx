import { Button, Typography } from 'antd';
import { useBearStore } from '@/store/useStore';

const { Title, Paragraph } = Typography;

const Home = () => {
  const { bears, increasePopulation } = useBearStore();

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
      <Title level={2}>Welcome to ReactDeepLearn</Title>
      <Paragraph>
        This is a template project using React 18, Vite, Ant Design, Tailwind CSS, Zustand, and
        React Query.
      </Paragraph>
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">Bears: {bears}</div>
        <Button type="primary" onClick={increasePopulation}>
          Add Bear
        </Button>
      </div>
    </div>
  );
};

export default Home;
