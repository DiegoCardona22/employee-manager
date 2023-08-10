// @packages
import { v4 as uuidV4 } from 'uuid';

export const SidebarOptions = [
  {
    icon: 'badge',
    id: uuidV4(),
    showIconInSidebar: true,
    text: 'Employees',
    children: [
      {
        claimId: uuidV4(),
        content: 'employeesViewer',
        icon: 'category',
        idItem: uuidV4(),
        showIconInSidebar: true,
        textItem: 'Employees Viewer',
      },
    ],
  },
];
