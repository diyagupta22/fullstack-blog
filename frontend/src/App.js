import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const fetchPosts = () => {
    fetch("http://10.217.28.209:5000/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    await fetch("http://10.217.28.209:5000/api/posts", {
      method: "POST",
      body: formData
    });

    setTitle("");
    setContent("");
    setImage(null);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await fetch(`http://10.217.28.209:5000/api/posts/${id}`, {
      method: "DELETE"
    });
    fetchPosts();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Diya’s Blog</h1>

      <div style={styles.form}>
        <input
          style={styles.input}
          placeholder="Enter Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Write something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input
          type="file"
          style={styles.file}
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button style={styles.button} onClick={createPost}>
          Add Post 🚀
        </button>
      </div>

      <div style={styles.posts}>
        {posts.map(post => (
          <div key={post._id} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {post.image && (
              <img src={post.image} style={styles.image} alt="blog" />
            )}

            <button
              style={styles.deleteBtn}
              onClick={() => deletePost(post._id)}
            >
              Delete ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🖤 DARK THEME STYLES
const styles = {
  container: {
    maxWidth: "700px",
    margin: "auto",
    padding: "20px",
    fontFamily: "sans-serif",
    background: "#0f0f0f",
    minHeight: "100vh",
    color: "#fff"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#00ffcc"
  },
  form: {
    background: "#1a1a1a",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 0 10px rgba(0,255,204,0.2)"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#0f0f0f",
    color: "#fff"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #333",
    background: "#0f0f0f",
    color: "#fff"
  },
  file: {
    marginBottom: "10px",
    color: "#aaa"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#00ffcc",
    color: "#000",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  posts: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  card: {
    padding: "15px",
    borderRadius: "12px",
    background: "#1a1a1a",
    boxShadow: "0 0 10px rgba(0,255,204,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginTop: "10px"
  },
  deleteBtn: {
    marginTop: "10px",
    background: "#ff3b3b",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default App;