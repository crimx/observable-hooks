import { Subject, of, combineLatest, from } from "rxjs";
import {
  switchMap,
  timeout,
  catchError,
  take,
  share,
  startWith,
} from "rxjs/operators";
import { ObservableResource } from "observable-hooks";

export type User = {
  name: string;
  description: string;
};

export type UserList = Array<{
  id: string;
  name: string;
}>;

export type Posts = Array<{
  id: number;
  text: string;
}>;

const fetchUser$$ = new Subject<string>();
const userResource$$ = fetchUser$$.pipe(
  // No more race condition
  switchMap(id => from(fakeUserXHR(id)).pipe(startWith(null))),
  share()
);
export const userResource = new ObservableResource(
  userResource$$,
  // Show loading state on subsequent update
  (value: User | null): value is User => !!value
);

const fetchPosts$$ = new Subject<string>();
const postResource$$ = fetchPosts$$.pipe(
  switchMap(id => fakePostsXHR(id)),
  share()
);
// Hide loading state on subsequent update
export const postsResource = new ObservableResource(postResource$$);

export const userListResource = new ObservableResource(
  // Wait till both of the first user and posts requests finish.
  combineLatest([userResource$$, postResource$$]).pipe(
    timeout(10000),
    catchError(() => of()),
    take(1),
    switchMap(() => fakeUserListXHR())
  )
);

export function fetchUser(id: string) {
  fetchUser$$.next(id);
}

export function fetchPosts(id: string) {
  fetchPosts$$.next(id);
}

export function fetchProfileData(id: string) {
  fetchUser(id);
  fetchPosts(id);
}

async function fakeUserXHR(id: string): Promise<User> {
  console.log(`fetch user ${id} ...`);
  await timer(2000 * Math.random());
  console.log(`fetched user ${id}`);
  switch (id) {
    case "crimx":
      return {
        name: "CRIMX",
        description: "Love React and RxJS.",
      };
    case "tom":
      return {
        name: "Tom",
        description: "Love React and RxJS just like CRIMX.",
      };
    default:
      throw new Error("No result");
  }
}

async function fakePostsXHR(id: string): Promise<Posts> {
  console.log("fetch post...");
  await timer(3000 * Math.random());
  console.log("fetched post");
  switch (id) {
    case "crimx":
      return [
        {
          id: 0,
          text: "Observable = N * Promise",
        },
        {
          id: 1,
          text: "Observable + Suspense = Magic",
        },
      ];
    case "tom":
      return [
        {
          id: 0,
          text: "I use observable-hooks to create complex animations.",
        },
        {
          id: 1,
          text: "observable-hooks is so lightweight and fast.",
        },
      ];
    default:
      throw new Error("No result");
  }
}

async function fakeUserListXHR(): Promise<UserList> {
  console.log("fetch user list...");
  await timer(2000 * Math.random());
  console.log("fetched user list");
  return [
    {
      id: "crimx",
      name: "CRIMX",
    },
    {
      id: "tom",
      name: "Tom",
    },
  ];
}

function timer(delay = 1000) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
