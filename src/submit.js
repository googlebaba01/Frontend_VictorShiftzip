/* eslint-disable no-unused-vars */
// submit.js
import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  // Accessing nodes and edges from the store
  const num_nodes = useStore((state) => state.nodes);
  const num_edges = useStore((state) => state.edges);
  const [response, setResponse] = useState(null);

  const HandleSubmit = async () => {
    const pipelineData = {
      nodes: num_nodes.map((node) => ({ id: node.id })),
      edges: num_edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    try {
      // Make the API request
      const res = await fetch("http://127.0.0.1:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipelineData), 
      });
      

      // Parse the JSON response
      const data = await res.json();

      // Show alert with the result
      alert(
        `Number of nodes: ${data.num_nodes}, Number of edges: ${data.num_edges}, Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="bg-gradient-to-r hover:from-[#4caf50] from-[#66bb6a] hover:via-[#388e3c] via-[#43a047] hover:to-[#2e7d32] to-[#81c784] text-md px-12 h-12 text-white rounded-lg shadow-xl"
        style={{
          fontWeight: "600",
        }}
        onClick={HandleSubmit}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
