const DB_NAME = 'GalleryDB';
const STORE_NAME = 'items';
const DB_VERSION = 1;

export const dbRequest = indexedDB.open(DB_NAME, DB_VERSION);

dbRequest.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('date', 'date', { unique: false });
    }
};

export const saveItem = (item) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            item.date = Date.now(); // Add timestamp for sorting
            const addRequest = store.add(item);
            // Using add (auto-increment ID)

            addRequest.onsuccess = () => resolve(addRequest.result);
            addRequest.onerror = () => reject('Error saving item');
        };
        request.onerror = () => reject('Error opening DB');
    });
};

export const getItems = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            // We want latest first. IndexedDB sorts by key (id) ascending naturally.
            // We can reverse it in JS or use cursor.
            // Since array size is reasonable for a portfolio (hundreds?), logic in JS is fine.
            const getAllRequest = store.getAll();

            getAllRequest.onsuccess = () => {
                let items = getAllRequest.result;
                // Sort by date/id descending (newest first)
                items.sort((a, b) => b.id - a.id);
                resolve(items);
            };
            getAllRequest.onerror = () => reject('Error fetching items');
        };
        request.onerror = () => reject('Error opening DB');
    });
};

export const deleteItem = (id) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const delRequest = store.delete(id);

            delRequest.onsuccess = () => resolve();
            delRequest.onerror = () => reject('Error deleting item');
        };
        request.onerror = () => reject('Error opening DB');
    });
};
