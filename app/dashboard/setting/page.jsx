"use client"

import React, { useEffect, useState } from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import './styles.css';
import { useRouter } from 'next/navigation';
import useAuth from '@/app/components/useAuth';


const Setting = () => {
    useAuth();
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
        <div className='w-full h-dvh bg-current flex justify-center items-center flex-col'>
            <div className='mb-20'>
                <p className='text-slate-100 text-center font-mono'>This is a ContextMenu example from Radix-ui</p>
                <p className='text-slate-100 text-center font-mono'>Right click menubar</p>
            </div>
            <div>
                <ContextMenu.Root>
                    <ContextMenu.Trigger className="ContextMenuTrigger bg-gradient-to-r from-violet-500 to-fuchsia-500">Right-click here.</ContextMenu.Trigger>
                    <ContextMenu.Portal>
                        <ContextMenu.Content className="ContextMenuContent" sideOffset={5} align="end">
                            <ContextMenu.Item className="ContextMenuItem">
                                Back <div className="RightSlot">⌘+[</div>
                            </ContextMenu.Item>
                            <ContextMenu.Item className="ContextMenuItem" disabled>
                                Forward <div className="RightSlot">⌘+]</div>
                            </ContextMenu.Item>
                            <ContextMenu.Item className="ContextMenuItem">
                                Reload <div className="RightSlot">⌘+R</div>
                            </ContextMenu.Item>
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger className="ContextMenuSubTrigger">
                                    More Tools
                                    <div className="RightSlot">
                                        <ChevronRightIcon />
                                    </div>
                                </ContextMenu.SubTrigger>
                                <ContextMenu.Portal>
                                    <ContextMenu.SubContent
                                        className="ContextMenuSubContent"
                                        sideOffset={2}
                                        alignOffset={-5}
                                    >
                                        <ContextMenu.Item className="ContextMenuItem">
                                            Save Page As… <div className="RightSlot">⌘+S</div>
                                        </ContextMenu.Item>
                                        <ContextMenu.Item className="ContextMenuItem">Create Shortcut…</ContextMenu.Item>
                                        <ContextMenu.Item className="ContextMenuItem">Name Window…</ContextMenu.Item>
                                        <ContextMenu.Separator className="ContextMenuSeparator" />
                                        <ContextMenu.Item className="ContextMenuItem">Developer Tools</ContextMenu.Item>
                                    </ContextMenu.SubContent>
                                </ContextMenu.Portal>
                            </ContextMenu.Sub>

                            <ContextMenu.Separator className="ContextMenuSeparator" />

                            <ContextMenu.CheckboxItem
                                className="ContextMenuCheckboxItem"
                                checked={bookmarksChecked}
                                onCheckedChange={setBookmarksChecked}
                            >
                                <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                                    <CheckIcon />
                                </ContextMenu.ItemIndicator>
                                Show Bookmarks <div className="RightSlot">⌘+B</div>
                            </ContextMenu.CheckboxItem>
                            <ContextMenu.CheckboxItem
                                className="ContextMenuCheckboxItem"
                                checked={urlsChecked}
                                onCheckedChange={setUrlsChecked}
                            >
                                <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                                    <CheckIcon />
                                </ContextMenu.ItemIndicator>
                                Show Full URLs
                            </ContextMenu.CheckboxItem>

                            <ContextMenu.Separator className="ContextMenuSeparator" />

                            <ContextMenu.Label className="ContextMenuLabel">People</ContextMenu.Label>
                            <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
                                <ContextMenu.RadioItem className="ContextMenuRadioItem" value="pedro">
                                    <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                                        <DotFilledIcon />
                                    </ContextMenu.ItemIndicator>
                                    Pedro Duarte
                                </ContextMenu.RadioItem>
                                <ContextMenu.RadioItem className="ContextMenuRadioItem" value="colm">
                                    <ContextMenu.ItemIndicator className="ContextMenuItemIndicator">
                                        <DotFilledIcon />
                                    </ContextMenu.ItemIndicator>
                                    Colm Tuite
                                </ContextMenu.RadioItem>
                            </ContextMenu.RadioGroup>
                        </ContextMenu.Content>
                    </ContextMenu.Portal>
                </ContextMenu.Root>
            </div>
        </div>
    );
};

export default Setting;