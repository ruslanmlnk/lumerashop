'use client';
import { useParams } from 'next/navigation';
import ProfileLayout from '@/components/profile/ProfileLayout';
import Orders from '@/components/profile/Orders';
import Downloads from '@/components/profile/Downloads';
import Addresses from '@/components/profile/Addresses';
import AccountDetails from '@/components/profile/AccountDetails';

export default function MyAccountSubPage() {
    const params = useParams();
    const slug = params?.slug as string[];
    const section = slug ? slug[0] : '';

    let content = null;
    let activeSection = section;

    switch (section) {
        case 'orders':
            content = <Orders />;
            break;
        case 'downloads':
            content = <Downloads />;
            break;
        case 'edit-address':
            content = <Addresses />;
            break;
        case 'edit-account':
            content = <AccountDetails />;
            break;
        default:
            content = <div>Sekce nenalezena.</div>;
    }

    return (
        <ProfileLayout activeSection={activeSection}>
            {content}
        </ProfileLayout>
    );
}
