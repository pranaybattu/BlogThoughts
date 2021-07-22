import Link from 'next/link'
import Layout from '../components/Layout';

const Index = () => {
    return (
        <Layout>
            <h2>Index page</h2>
            <Link href="/Signup">
                <a>Signup</a>
            </Link>
        </Layout>
    );
};

export default Index;