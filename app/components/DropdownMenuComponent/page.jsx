import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import './styles.css';
import Link from 'next/link';

const DropdownMenuComponent = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Link href="/dashboard/setting cursor-pointer"
                    className="block py-2 px-3 text-green-400"
                >Dashboard</Link>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent bg-emerald-50" sideOffset={1}>
                    <DropdownMenu.Item className="DropdownMenuItem cursor-pointer">
                        <Link href="/dashboard/setting" className="text-green-800 px-8">
                            Setting
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem cursor-pointer">
                        <Link href="/dashboard/other"
                            className="text-green-800 px-8"
                        >Other</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuComponent;