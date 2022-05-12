import React from "react";

const Stats = () => {
  return (
    <div className="py-16 bg-do-blue-lighter">
      <div className="container flex flex-col gap-y-10 lg:flex-row mx-auto">
        <div className="flex w-full lg:w-1/3 gap-x-2">
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDNmOTkiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgZmlsbD0iI2NlZTBmYSIgcj0iMjYiLz48ZWxsaXBzZSBjeD0iMzYiIGN5PSIzNiIgcng9IjEwIiByeT0iMjYiLz48ZWxsaXBzZSBjeD0iMzYiIGN5PSIzNiIgcng9IjEwIiByeT0iMjYiIHRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMSAwIDcyIDApIi8+PGNpcmNsZSBjeD0iNTAuNSIgY3k9IjIxLjUiIGZpbGw9IiNmZmYiIHI9IjEyLjUiLz48cGF0aCBkPSJtNDQgMThzLjc2NTEtMSAyLTEgMiAxIDIgMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTU2IDI0Yy0xLjMyNDYgMi4wNTctMy4wNTM0IDMtNS41IDNzLTQuMTc1NC0uOTQzLTUuNS0zIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTMgMThzLjc2NTEtMSAyLTEgMiAxIDIgMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjxwYXRoIGQ9Im00MSAxMy0xLTIgMyAuNXoiIGZpbGw9IiMwMDNmOTkiLz48cGF0aCBkPSJtNjAgMzItMS0yIDMgLjV6IiBmaWxsPSIjMDAzZjk5Ii8+PC9zdmc+"
              alt=""
            />
          </div>
          <div>
            <div className="text-4xl font-bold">598k</div>
            <div className="text-gray-500">Customers worldwide.</div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/3 gap-x-2">
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDNmOTkiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzciIGN5PSI0NyIgZmlsbD0iI2NlZTBmYSIgcj0iMTgiLz48cGF0aCBkPSJtMjguMjMyNCAzMS45NTQ2LTExLTE5LjA1MjYiLz48cGF0aCBkPSJtMzEuNzIyOCA4LTEyLjk5MDQgNy41IDQuNSA3Ljc5NDIgNi4wNjIyLTMuNS4zODQgMi42NjUxIDE0LjcyMjQtOC41LTQuODQ4MS0yLjM5NzEuMzQ4MS01LjM5NzE0LTcuNzk0MiA0LjUwMDA0eiIvPjxlbGxpcHNlIGN4PSIzNi45OTk5IiBjeT0iNDYuOTk5OSIgcng9IjEwIiByeT0iMTgiIHRyYW5zZm9ybT0ibWF0cml4KC0uODY2MDI1NCAuNSAtLjUgLS44NjYwMjU0IDkyLjU0MjcwMyA2OS4yMDMwNTcpIi8+PC9nPjxjaXJjbGUgY3g9IjE2LjczMiIgY3k9IjEyLjAzNiIgZmlsbD0iIzAwM2Y5OSIgcj0iMiIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjAyNTQgLS41IC41IC44NjYwMjU0IC0zLjc3NjMzNyA5Ljk3ODUxOCkiLz48cGF0aCBkPSJtNTguMDMxMSAxNi4yNjczYy4xNjExLS40MzU0Ljc3NjctLjQzNTQuOTM3OCAwbDEuMjA2OSAzLjI2MTVjLjA1MDYuMTM2OC4xNTg2LjI0NDguMjk1NC4yOTU0bDMuMjYxNSAxLjIwNjljLjQzNTQuMTYxMS40MzU0Ljc3NjcgMCAuOTM3OGwtMy4yNjE1IDEuMjA2OWMtLjEzNjguMDUwNi0uMjQ0OC4xNTg2LS4yOTU0LjI5NTRsLTEuMjA2OSAzLjI2MTVjLS4xNjExLjQzNTQtLjc3NjcuNDM1NC0uOTM3OCAwbC0xLjIwNjktMy4yNjE1Yy0uMDUwNi0uMTM2OC0uMTU4Ni0uMjQ0OC0uMjk1NC0uMjk1NGwtMy4yNjE1LTEuMjA2OWMtLjQzNTQtLjE2MTEtLjQzNTQtLjc3NjcgMC0uOTM3OGwzLjI2MTUtMS4yMDY5Yy4xMzY4LS4wNTA2LjI0NDgtLjE1ODYuMjk1NC0uMjk1NHoiIGZpbGw9IiNjZWUwZmEiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTEwIDMwdjYiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJtMTMgMzNoLTYiIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4="
              alt=""
            />
          </div>
          <div>
            <div className="text-4xl font-bold">185</div>
            <div className="text-gray-500">Countries we serve.</div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/3 gap-x-2">
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB2aWV3Qm94PSIwIDAgNzIgNzIiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im01MS4zMzI3IDU5YzYuNDY2OS00LjcyOTcgMTAuNjY3My0xMi4zNzQzIDEwLjY2NzMtMjEgMC0xNC4zNTk0LTExLjY0MDYtMjYtMjYtMjZzLTI2IDExLjY0MDYtMjYgMjZjMCA4LjYyNTcgNC4yMDA0IDE2LjI3MDMgMTAuNjY3MyAyMXoiIGZpbGw9IiNjZWUwZmEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Im01MS4zMzI3IDU5djFoLjMyNjdsLjI2MzctLjE5Mjh6bS0zMC42NjU0IDAtLjU5MDQuODA3Mi4yNjM3LjE5MjhoLjMyNjd6bTQwLjMzMjctMjFjMCA4LjI5MzItNC4wMzcxIDE1LjY0MzMtMTAuMjU3NiAyMC4xOTI4bDEuMTgwNyAxLjYxNDRjNi43MTMzLTQuOTEgMTEuMDc2OS0xMi44NDkxIDExLjA3NjktMjEuODA3MnptLTI1LTI1YzEzLjgwNzEgMCAyNSAxMS4xOTI5IDI1IDI1aDJjMC0xNC45MTE3LTEyLjA4ODMtMjctMjctMjd6bS0yNSAyNWMwLTEzLjgwNzEgMTEuMTkyOS0yNSAyNS0yNXYtMmMtMTQuOTExNyAwLTI3IDEyLjA4ODMtMjcgMjd6bTEwLjI1NzYgMjAuMTkyOGMtNi4yMjA1LTQuNTQ5NS0xMC4yNTc2LTExLjg5OTYtMTAuMjU3Ni0yMC4xOTI4aC0yYzAgOC45NTgxIDQuMzYzNiAxNi44OTcyIDExLjA3NjkgMjEuODA3MnptLS41OTAzIDEuODA3MmgzMC42NjU0di0yaC0zMC42NjU0eiIgZmlsbD0iIzAwM2Y5OSIvPjxnIHN0cm9rZT0iIzAwM2Y5OSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJtMzYgMTJ2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTE3LjYxNTIgMTkuNjE1MiA0LjI0MjcgNC4yNDI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTQuMzg0OCAxOS42MTUyLTQuMjQyNyA0LjI0MjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Im0xMCAzOGg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtNTYgMzhoNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTUwLjE0MjYgNTIuMTQyMSA0LjI0MjYgNC4yNDI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJtMjEuODU3NCA1Mi4xNDItNC4yNDI2IDQuMjQyNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTMxLjk3MzMgMzUuNDU3MSAxMS42MjIzLTExLjc3NzhjLjM2MTgtLjM2NjYuOTc0Ni0uMDEyOC44MzguNDgzOGwtNC4zODg3IDE1Ljk1NDEtNC4wMzU4LTIuMzMwMXoiLz48Y2lyY2xlIGN4PSIzNiIgY3k9IjM4IiBmaWxsPSIjZmZmIiByPSI2Ii8+PHJlY3QgZmlsbD0iI2ZmZiIgaGVpZ2h0PSI1IiByeD0iMSIgd2lkdGg9IjE2IiB4PSIyOCIgeT0iNDkiLz48cGF0aCBkPSJtMzkgNDl2NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTMzIDQ5djUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4="
              alt=""
            />
          </div>
          <div>
            <div className="text-4xl font-bold">99.99%</div>
            <div className="text-gray-500">Uptime SLA for VMs & Block Storage.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
