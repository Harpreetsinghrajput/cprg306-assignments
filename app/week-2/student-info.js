// app/week-2/student-info.js
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: [Harpreet Singh]</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/harpreetsinghrajput/cprg306-assignments">
          Visit My GitHub
        </Link>
      </p>
    </div>
  );
}
