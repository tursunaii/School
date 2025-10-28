import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  Timestamp,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';
import firebaseConfig from '../config/firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Sign in anonymously if not already signed in
export const initializeAuth = async () => {
  if (!auth.currentUser) {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error('Error signing in anonymously:', error);
    }
  }
};

// Message interface
export interface Message {
  id?: string;
  text: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  timestamp: Timestamp;
  isRead: boolean;
}

// Chat interface
export interface Chat {
  id?: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unread: number;
  isOnline: boolean;
  role: string;
  isPinned: boolean;
}

// Send a new message
export const sendMessage = async (chatId: string, message: Omit<Message, 'id' | 'timestamp'>) => {
  try {
    const messagesRef = collection(db, 'chats', chatId, 'messages');
    const newMessage = {
      ...message,
      timestamp: Timestamp.now()
    };
    const docRef = await addDoc(messagesRef, newMessage);
    return docRef.id;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Subscribe to messages in real-time
export const subscribeToMessages = (chatId: string, callback: (messages: Message[]) => void) => {
  const messagesRef = collection(db, 'chats', chatId, 'messages');
  const q = query(messagesRef, orderBy('timestamp', 'asc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const messages: Message[] = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...(doc.data() as Omit<Message, 'id'>)
      });
    });
    callback(messages);
  });
};

// Update message read status
export const markMessageAsRead = async (chatId: string, messageId: string) => {
  try {
    const messageRef = doc(db, 'chats', chatId, 'messages', messageId);
    await updateDoc(messageRef, { isRead: true });
  } catch (error) {
    console.error('Error marking message as read:', error);
  }
};

// Delete a message
export const deleteMessage = async (chatId: string, messageId: string) => {
  try {
    const messageRef = doc(db, 'chats', chatId, 'messages', messageId);
    await deleteDoc(messageRef);
  } catch (error) {
    console.error('Error deleting message:', error);
  }
};

export { db, auth };